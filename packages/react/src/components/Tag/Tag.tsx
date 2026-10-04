import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import { Icon } from '../../internal/Icon';
import styles from './Tag.module.css';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** 24 or 28px tall. Figma: Size. */
  size?: 'sm' | 'md';
  /** Icon before the label. Figma: L icon. */
  icon?: ReactNode;
  /** An Avatar before the label, for people. Figma: Avatar. */
  avatar?: ReactNode;
  /** Shows a remove button and calls this when it is pressed. Figma: Closable. */
  onRemove?: () => void;
  /** Screen reader name for the remove button. Defaults to "Remove <label>". */
  removeLabel?: string;
  disabled?: boolean;
  children: ReactNode;
}

/** A small label for a chosen value, a filter or a person. Closable tags can be removed. */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  { size = 'md', icon, avatar, onRemove, removeLabel, disabled, className, children, ...rest },
  ref,
) {
  return (
    <span ref={ref} className={cx(styles.tag, styles[size], disabled && styles.disabled, className)} {...rest}>
      {avatar && <span className={styles.avatar}>{avatar}</span>}
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <span className={styles.label}>{children}</span>
      {onRemove && (
        <button
          type="button"
          className={styles.remove}
          disabled={disabled}
          aria-label={removeLabel ?? `Remove ${typeof children === 'string' ? children : ''}`.trim()}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          <Icon name="X" />
        </button>
      )}
    </span>
  );
});
