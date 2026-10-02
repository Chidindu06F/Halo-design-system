import { forwardRef } from 'react';
import type { HTMLAttributes, KeyboardEvent, MouseEvent, ReactNode, Ref } from 'react';
import styles from './Card.module.css';

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  /** Shown on top: an image, video thumbnail or illustration. Leave it out for no media. Figma: Media slot and Show media. */
  media?: ReactNode;
  /** Makes the whole card one link. Don't put other links or buttons inside. */
  href?: string;
  /** Makes the whole card one button. Don't put other links or buttons inside. */
  onClick?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
  /** Everything below the media. Figma: Content slot. */
  children: ReactNode;
}

/** A container for an image and content about one thing, like a file, a project or an article. */
export const Card = forwardRef<HTMLElement, CardProps>(function Card(
  { media, href, onClick, className, children, ...rest },
  ref,
) {
  const clickable = Boolean(href || onClick);
  const classes = [styles.card, clickable && styles.clickable, className].filter(Boolean).join(' ');
  const inner = (
    <>
      {media && <div className={styles.media}>{media}</div>}
      <div className={styles.content}>{children}</div>
    </>
  );

  if (href) {
    return (
      <a ref={ref as Ref<HTMLAnchorElement>} href={href} className={classes} onClick={onClick} {...rest}>
        {inner}
      </a>
    );
  }

  if (onClick) {
    // A div with button behaviour, because a <button> can't hold block content like headings.
    return (
      <div
        {...rest}
        ref={ref as Ref<HTMLDivElement>}
        role="button"
        tabIndex={0}
        className={classes}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(e);
          }
        }}
      >
        {inner}
      </div>
    );
  }

  return (
    <article ref={ref} className={classes} {...rest}>
      {inner}
    </article>
  );
});
