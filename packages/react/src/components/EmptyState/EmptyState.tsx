import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import styles from './EmptyState.module.css';

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Figma: Size. */
  size?: 'lg' | 'sm';
  /** An icon shown in a grey circle. Figma: Media slot. */
  icon?: ReactNode;
  /** An illustration or image instead of the icon circle. Figma: Media slot. */
  media?: ReactNode;
  /** Figma: Title. */
  title: ReactNode;
  /** Say why it is empty and what to do next. Figma: Description. */
  description?: ReactNode;
  /** Usually a primary Button and a secondary one. Figma: Actions. */
  actions?: ReactNode;
}

/** Fills a space with nothing to show yet, like an empty list or no search results. */
export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(function EmptyState(
  { size = 'lg', icon, media, title, description, actions, className, ...rest },
  ref,
) {
  return (
    <div ref={ref} className={cx(styles.empty, styles[size], className)} {...rest}>
      {media ?? (icon && <span className={styles.icon} aria-hidden="true">{icon}</span>)}
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
});
