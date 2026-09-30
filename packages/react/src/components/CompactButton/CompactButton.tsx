import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './CompactButton.module.css';

export type CompactButtonVariant = 'stroke' | 'ghost' | 'fill';
export type CompactButtonSize = 'md' | 'lg';

export interface CompactButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Background and outline. Figma: Style. */
  variant?: CompactButtonVariant;
  /** lg is 24px with a 20px icon, md is 20px with a 16px icon. Figma: Size. */
  size?: CompactButtonSize;
  /** Fully round corners instead of slightly rounded. Figma: Full radius. */
  round?: boolean;
  /** Switched on, for buttons that toggle (like Bold). Sets aria-pressed. Figma: State=Selected. */
  selected?: boolean;
  /** The icon. Figma: Change icon. */
  children: ReactNode;
  /** Compact buttons have no visible text, so they need a name for screen readers. */
  'aria-label': string;
}

export const CompactButton = forwardRef<HTMLButtonElement, CompactButtonProps>(function CompactButton(
  { variant = 'stroke', size = 'lg', round = false, selected, children, className, type = 'button', ...rest },
  ref,
) {
  const classes = [styles.button, styles[variant], styles[size], round && styles.round, selected && styles.selected, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button ref={ref} type={type} className={classes} aria-pressed={selected} {...rest}>
      <span className={styles.icon} aria-hidden="true">{children}</span>
    </button>
  );
});
