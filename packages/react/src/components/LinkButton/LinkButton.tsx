import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import styles from './LinkButton.module.css';

export type LinkButtonVariant = 'primary' | 'destructive';
export type LinkButtonSize = 'sm' | 'md';

interface LinkButtonBaseProps {
  /** Brand purple or red. Figma: Type. */
  variant?: LinkButtonVariant;
  /** md is 14px with 20px icons (default); sm is 12px with 16px icons. Figma: Size. */
  size?: LinkButtonSize;
  /** Icon before the label. Figma: Show L icon / Change L icon. */
  iconLeft?: ReactNode;
  /** Icon after the label. Figma: Show R icon / Change R icon. */
  iconRight?: ReactNode;
  /** The link text. Figma: Label. */
  children: ReactNode;
  disabled?: boolean;
}

type AsLink = LinkButtonBaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkButtonBaseProps> & { href: string };
type AsButton = LinkButtonBaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof LinkButtonBaseProps> & { href?: undefined };

/** With `href` it renders a real link (it goes somewhere); without, a button (it runs an action). */
export type LinkButtonProps = AsLink | AsButton;

export const LinkButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, LinkButtonProps>(function LinkButton(props, ref) {
  const { variant = 'primary', size = 'md', iconLeft, iconRight, children, disabled = false, className, ...rest } = props;
  const classes = [styles.link, styles[variant], styles[size], className].filter(Boolean).join(' ');
  const content = (
    <>
      {iconLeft && <span className={styles.icon} aria-hidden="true">{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {iconRight && <span className={styles.icon} aria-hidden="true">{iconRight}</span>}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    // A disabled link has no href, so it can't be followed or focused.
    return (
      <a ref={ref as Ref<HTMLAnchorElement>} className={classes} href={disabled ? undefined : href} aria-disabled={disabled || undefined} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button ref={ref as Ref<HTMLButtonElement>} type={type} className={classes} disabled={disabled} {...buttonProps}>
      {content}
    </button>
  );
});
