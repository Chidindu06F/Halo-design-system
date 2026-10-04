import { forwardRef, useId } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import { Icon } from '../../internal/Icon';
import styles from './Progress.module.css';

export type ProgressStatus = 'default' | 'success' | 'error';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** How much is done. Leave it out for an indeterminate bar. */
  value?: number;
  /** The value that counts as complete. */
  max?: number;
  /** Colour of the fill. Figma: Status. */
  status?: ProgressStatus;
  /** 4px (sm) or 8px (md) tall. Figma: Size. */
  size?: 'sm' | 'md';
  /** What is in progress, shown above the bar. Figma: Label. */
  label?: ReactNode;
  /** The value shown on the right, like "60%" or "7.2 of 10 GB". Defaults to the percentage; false hides it. Figma: Value. */
  valueLabel?: ReactNode;
  /** What is happening or what to do next. Figma: Hint. */
  hint?: ReactNode;
}

const clamp = (v: number, max: number) => Math.min(Math.max(v, 0), max);

/** Shows how far along something is, like an upload. Indeterminate when `value` is left out. */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(function ProgressBar(
  { value, max = 100, status = 'default', size = 'sm', label, valueLabel, hint, className, 'aria-label': ariaLabel, ...rest },
  ref,
) {
  const id = useId();
  const indeterminate = value === undefined;
  const pct = indeterminate ? 0 : (clamp(value, max) / max) * 100;
  const shownValue = valueLabel === false ? null : (valueLabel ?? (indeterminate ? null : `${Math.round(pct)}%`));
  const bar = (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={indeterminate ? undefined : clamp(value, max)}
      aria-valuetext={typeof valueLabel === 'string' ? valueLabel : undefined}
      aria-label={label ? undefined : ariaLabel}
      aria-labelledby={label ? `${id}-label` : undefined}
      aria-describedby={hint ? `${id}-hint` : undefined}
      className={cx(styles.track, styles[size], styles[status], indeterminate && styles.indeterminate)}
    >
      <span className={styles.fill} style={indeterminate ? undefined : { width: `${pct}%` }} />
    </div>
  );
  if (!label && !hint && shownValue == null) return <div ref={ref} className={className} {...rest}>{bar}</div>;
  return (
    <div ref={ref} className={cx(styles.field, className)} {...rest}>
      {(label || shownValue != null) && (
        <div className={styles.header}>
          {label && <span id={`${id}-label`} className={styles.label}>{label}</span>}
          {shownValue != null && <span className={styles.value}>{shownValue}</span>}
        </div>
      )}
      {bar}
      {hint && (
        <span id={`${id}-hint`} className={cx(styles.hint, status === 'error' && styles.hintError)}>
          {status === 'error' && <Icon name="WarningCircle" className={styles.hintIcon} />}
          {hint}
        </span>
      )}
    </div>
  );
});

export interface ProgressCircleProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  /** 24, 40 or 64px. Figma: Size. */
  size?: 'sm' | 'md' | 'lg';
  /** Shows the percentage in the middle (md and lg). Figma: Label. */
  showValue?: boolean;
  /** Read by screen readers. */
  'aria-label'?: string;
}

const CIRCLES = { sm: [24, 3], md: [40, 4], lg: [64, 6] } as const;

/** A ring that fills clockwise from the top. */
export const ProgressCircle = forwardRef<HTMLDivElement, ProgressCircleProps>(function ProgressCircle(
  { value, max = 100, size = 'md', showValue = true, className, ...rest },
  ref,
) {
  const [s, w] = CIRCLES[size];
  const r = (s - w) / 2;
  const c = 2 * Math.PI * r;
  const pct = (clamp(value, max) / max) * 100;
  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={clamp(value, max)}
      className={cx(styles.circle, styles[`circle-${size}`], className)}
      style={{ width: s, height: s }}
      {...rest}
    >
      <svg viewBox={`0 0 ${s} ${s}`} width={s} height={s} aria-hidden="true">
        <circle className={styles.ring} cx={s / 2} cy={s / 2} r={r} strokeWidth={w} fill="none" />
        <circle
          className={styles.arc}
          cx={s / 2}
          cy={s / 2}
          r={r}
          strokeWidth={w}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${(pct / 100) * c} ${c}`}
        />
      </svg>
      {showValue && size !== 'sm' && <span className={styles.circleValue} aria-hidden="true">{Math.round(pct)}%</span>}
    </div>
  );
});
