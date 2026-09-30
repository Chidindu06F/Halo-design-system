import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Emphasis of the button. Figma: Type. */
  variant?: ButtonVariant;
  /** Height, padding, label and icon size. Figma: Size. */
  size?: ButtonSize;
}

interface ButtonWithLabelProps extends ButtonBaseProps {
  iconOnly?: false;
  /** The button text. Figma: Label. */
  children: ReactNode;
  /** Icon before the label. Figma: L icon. */
  iconLeft?: ReactNode;
  /** Icon after the label. Figma: R icon. */
  iconRight?: ReactNode;
}

interface ButtonIconOnlyProps extends ButtonBaseProps {
  /** Square button with a single icon and no label. Figma: Icon only. */
  iconOnly: true;
  /** The icon. */
  children: ReactNode;
  /** Icon-only buttons have no visible text, so they need a name for screen readers. */
  'aria-label': string;
  iconLeft?: never;
  iconRight?: never;
}

export type ButtonProps = ButtonWithLabelProps | ButtonIconOnlyProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', iconOnly = false, iconLeft, iconRight, children, className, type = 'button', ...rest },
  ref,
) {
  const classes = [styles.button, styles[variant], styles[size], iconOnly && styles.iconOnly, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button ref={ref} type={type} className={classes} {...rest}>
      {iconOnly ? (
        <span className={styles.icon} aria-hidden="true">{children}</span>
      ) : (
        <>
          {iconLeft && <span className={styles.icon} aria-hidden="true">{iconLeft}</span>}
          <span className={styles.label}>{children}</span>
          {iconRight && <span className={styles.icon} aria-hidden="true">{iconRight}</span>}
        </>
      )}
    </button>
  );
});
