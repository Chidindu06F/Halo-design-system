import { forwardRef, useId } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import { useControllable } from '../../internal/useControllable';
import styles from './Switch.module.css';

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value'> {
  /** The setting it turns on or off. Figma: Label. */
  label?: ReactNode;
  /** Extra detail, like why it is disabled. Figma: Description. */
  description?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** 28 by 16 (sm) or 36 by 20 (md). Figma: Size. */
  size?: 'sm' | 'md';
  /** Switch before the label, or at the end of a full-width row. Figma: Control position. */
  controlPosition?: 'start' | 'end';
}

/** Turns one setting on or off straight away. Use a Checkbox when the choice is sent with a form. */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { label, description, checked, defaultChecked = false, onCheckedChange, size = 'md', controlPosition = 'start', disabled, id, className, onClick, ...rest },
  ref,
) {
  const [on, setOn] = useControllable(checked, defaultChecked, onCheckedChange);
  const autoId = useId();
  const btnId = id ?? autoId;
  const labelId = label ? `${btnId}-label` : undefined;
  const descId = description ? `${btnId}-description` : undefined;
  const control = (
    <button
      ref={ref}
      id={btnId}
      type="button"
      role="switch"
      aria-checked={on}
      aria-labelledby={labelId}
      aria-describedby={descId}
      disabled={disabled}
      className={styles.track}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) setOn(!on);
      }}
      {...rest}
    >
      <span className={styles.thumb} />
    </button>
  );
  if (!label && !description) return <span className={cx(styles[size], className)}>{control}</span>;
  return (
    <div className={cx(styles.field, styles[size], styles[controlPosition], disabled && styles.disabled, className)}>
      <span className={styles.control}>{control}</span>
      <span className={styles.text}>
        {label && (
          <label id={labelId} htmlFor={btnId} className={styles.label}>
            {label}
          </label>
        )}
        {description && <span id={descId} className={styles.description}>{description}</span>}
      </span>
    </div>
  );
});
