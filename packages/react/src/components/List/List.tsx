import { Children, createContext, forwardRef, Fragment, isValidElement, useContext } from 'react';
import type { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import styles from './List.module.css';

const SizeCtx = createContext<'md' | 'sm'>('md');

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  /** plain, divided (lines between items) or card (a bordered box). Figma: Style. */
  variant?: 'plain' | 'divided' | 'card';
  /** Figma: Size. */
  size?: 'md' | 'sm';
}

/** A vertical list of ListItems, like files, settings or people. */
export const List = forwardRef<HTMLUListElement, ListProps>(function List({ variant = 'plain', size = 'md', className, children, ...rest }, ref) {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <SizeCtx.Provider value={size}>
      <ul ref={ref} className={cx(styles.list, styles[variant], className)} {...rest}>
        {items.map((child, i) => (
          <Fragment key={child.key ?? i}>
            {variant === 'divided' && i > 0 && <li role="presentation" className={styles.divider} />}
            {child}
          </Fragment>
        ))}
      </ul>
    </SizeCtx.Provider>
  );
});

export interface ListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'title' | 'onClick'> {
  /** Figma: Title. */
  title: ReactNode;
  /** Figma: Description. */
  description?: ReactNode;
  /** Icon before the text. Figma: L icon. */
  icon?: ReactNode;
  /** Anything before the text instead of an icon, like an Avatar or Checkbox. Figma: L slot. */
  leading?: ReactNode;
  /** Anything after the text, like a Badge, Switch or value. Figma: R slot. */
  trailing?: ReactNode;
  /** Icon at the end, like a caret for items that open something. Figma: R icon. */
  trailingIcon?: ReactNode;
  /** Makes the row a link. */
  href?: string;
  /** Makes the row a button. */
  onClick?: MouseEventHandler<HTMLElement>;
  /** Purple background for the chosen row. Figma: State=Selected. */
  selected?: boolean;
  disabled?: boolean;
}

/** One row of a List. Pass `href` or `onClick` to make the whole row clickable. */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(function ListItem(
  { title, description, icon, leading, trailing, trailingIcon, href, onClick, selected, disabled, className, ...rest },
  ref,
) {
  const size = useContext(SizeCtx);
  const inner = (
    <>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      {leading && <span className={styles.slot}>{leading}</span>}
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        {description && <span className={styles.description}>{description}</span>}
      </span>
      {trailing && <span className={styles.slot}>{trailing}</span>}
      {trailingIcon && <span className={cx(styles.icon, styles.trailingIcon)} aria-hidden="true">{trailingIcon}</span>}
    </>
  );
  const rowClass = cx(styles.row, styles[size], selected && styles.selected, disabled && styles.disabled);
  return (
    <li ref={ref} className={cx(styles.item, className)} {...rest}>
      {href && !disabled ? (
        <a href={href} className={cx(rowClass, styles.interactive)} aria-current={selected ? 'page' : undefined} onClick={onClick}>
          {inner}
        </a>
      ) : onClick || href ? (
        <button type="button" className={cx(rowClass, styles.interactive)} aria-pressed={selected} disabled={disabled} onClick={onClick}>
          {inner}
        </button>
      ) : (
        <div className={rowClass}>{inner}</div>
      )}
    </li>
  );
});
