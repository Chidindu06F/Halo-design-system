import { Children, forwardRef, isValidElement, useEffect, useRef, useState } from 'react';
import type { AnchorHTMLAttributes, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { CARET_RIGHT, DOTS_THREE } from './icons';
import styles from './Breadcrumbs.module.css';

export type BreadcrumbsSize = 'sm' | 'md';
export type BreadcrumbsSeparator = 'slash' | 'caret';

export interface BreadcrumbItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Where the link goes. Leave it off the last item, which is the current page. */
  href?: string;
  /** An icon before the label, often a house on the first item. Figma: Show icon and Icon. */
  icon?: ReactNode;
  /** The name of the page. Figma: Label. */
  children: ReactNode;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /** 12px (sm) or 14px (md) text. Figma: Size. */
  size?: BreadcrumbsSize;
  /** The mark between levels. Figma: Separator. */
  separator?: BreadcrumbsSeparator;
  /** When there are more levels than this, the middle ones collapse into "…". Figma: Levels=Collapsed. */
  maxItems?: number;
  /** `BreadcrumbItem` elements, from the top level down to the current page. */
  children: ReactNode;
}

/** One level in a `Breadcrumbs` trail. The last one is shown as the current page. */
export function BreadcrumbItem(_props: BreadcrumbItemProps): ReactElement | null {
  // Rendered by Breadcrumbs, which knows whether this item is the current page.
  return null;
}

function Separator({ type }: { type: BreadcrumbsSeparator }) {
  return (
    <li className={styles.separator} aria-hidden="true">
      {type === 'caret' ? (
        <svg viewBox="0 0 256 256" fill="currentColor"><path d={CARET_RIGHT} /></svg>
      ) : (
        '/'
      )}
    </li>
  );
}

/** A trail of links that shows where a page sits, ending with the current page. */
export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(function Breadcrumbs(
  { size = 'md', separator = 'slash', maxItems = 4, className, children, 'aria-label': ariaLabel = 'Breadcrumb', ...rest },
  ref,
) {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement<BreadcrumbItemProps>[];
  const [expanded, setExpanded] = useState(false);
  const firstRevealed = useRef<HTMLAnchorElement | null>(null);

  // Keep the first level and the last ones; the middle collapses into "…".
  const keepEnd = Math.max(1, maxItems - 2);
  const collapse = !expanded && items.length > maxItems && items.length > keepEnd + 1;
  const hiddenCount = collapse ? items.length - 1 - keepEnd : 0;

  // After expanding, move focus to the first page that was hidden.
  useEffect(() => {
    if (expanded) firstRevealed.current?.focus();
  }, [expanded]);

  const renderItem = (item: ReactElement<BreadcrumbItemProps>, index: number) => {
    const { href, icon, children: label, className: itemClass, ...linkProps } = item.props;
    const current = index === items.length - 1;
    const content = (
      <>
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        <span>{label}</span>
      </>
    );
    return (
      <li key={item.key ?? index} className={styles.item}>
        {current ? (
          <span className={[styles.current, itemClass].filter(Boolean).join(' ')} aria-current="page">{content}</span>
        ) : (
          <a
            ref={expanded && index === 1 ? firstRevealed : undefined}
            href={href}
            className={[styles.link, itemClass].filter(Boolean).join(' ')}
            {...linkProps}
          >
            {content}
          </a>
        )}
      </li>
    );
  };

  const parts: ReactNode[] = [];
  items.forEach((item, index) => {
    if (collapse && index > 0 && index <= hiddenCount) {
      if (index === 1) {
        parts.push(<Separator key="sep-overflow" type={separator} />);
        parts.push(
          <li key="overflow" className={styles.item}>
            <button
              type="button"
              className={styles.overflow}
              aria-label={`Show ${hiddenCount} hidden ${hiddenCount === 1 ? 'page' : 'pages'}`}
              onClick={() => setExpanded(true)}
            >
              <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d={DOTS_THREE} /></svg>
            </button>
          </li>,
        );
      }
      return;
    }
    if (index > 0) parts.push(<Separator key={`sep-${index}`} type={separator} />);
    parts.push(renderItem(item, index));
  });

  return (
    <nav ref={ref} aria-label={ariaLabel} className={[styles.breadcrumbs, styles[size], className].filter(Boolean).join(' ')} {...rest}>
      <ol className={styles.list}>{parts}</ol>
    </nav>
  );
});
