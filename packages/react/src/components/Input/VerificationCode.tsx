import { useRef } from 'react';
import type { ClipboardEvent, KeyboardEvent } from 'react';
import { cx } from '../../internal/cx';
import { useControllable } from '../../internal/useControllable';
import styles from './VerificationCode.module.css';

export interface VerificationCodeProps {
  /** Number of digits. */
  length?: number;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Called once every digit is filled. */
  onComplete?: (value: string) => void;
  /** 40 or 48px circles. Figma: Size. */
  size?: 'sm' | 'md';
  invalid?: boolean;
  disabled?: boolean;
  /** Names the group for screen readers, like "Verification code". */
  'aria-label'?: string;
  className?: string;
}

/** One circle per digit. Typing moves to the next; pasting fills them all. Figma: Verification code. */
export function VerificationCode({
  length = 6,
  value,
  defaultValue = '',
  onValueChange,
  onComplete,
  size = 'md',
  invalid,
  disabled,
  className,
  'aria-label': ariaLabel = 'Verification code',
}: VerificationCodeProps) {
  const [code, setCode] = useControllable(value, defaultValue, onValueChange);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const update = (next: string) => {
    const clean = next.replace(/\D/g, '').slice(0, length);
    setCode(clean);
    if (clean.length === length) onComplete?.(clean);
    refs.current[Math.min(clean.length, length - 1)]?.focus();
  };

  const onKey = (i: number) => (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[i] && i > 0) {
      e.preventDefault();
      update(code.slice(0, i - 1));
    } else if (e.key === 'ArrowLeft' && i > 0) refs.current[i - 1]?.focus();
    else if (e.key === 'ArrowRight' && i < length - 1) refs.current[i + 1]?.focus();
  };

  const onPaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    update(e.clipboardData.getData('text'));
  };

  return (
    <div role="group" aria-label={ariaLabel} className={cx(styles.code, styles[size], className)}>
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={styles.digit}
          inputMode="numeric"
          autoComplete={i === 0 ? 'one-time-code' : 'off'}
          maxLength={1}
          aria-label={`Digit ${i + 1}`}
          aria-invalid={invalid || undefined}
          disabled={disabled}
          value={code[i] ?? ''}
          onChange={(e) => {
            const d = e.target.value.replace(/\D/g, '').slice(-1);
            if (!d) return update(code.slice(0, i) + code.slice(i + 1));
            update((code.slice(0, i) + d + code.slice(i + 1)).slice(0, length));
          }}
          onKeyDown={onKey(i)}
          onPaste={onPaste}
          onFocus={(e) => e.target.select()}
        />
      ))}
    </div>
  );
}
