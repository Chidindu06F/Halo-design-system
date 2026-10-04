import { createContext, forwardRef, useContext } from 'react';
import type { AnchorHTMLAttributes, HTMLAttributes, MouseEventHandler, ReactNode, Ref } from 'react';
import { cx } from '../../internal/cx';
import { Icon } from '../../internal/Icon';
import { useControllable } from '../../internal/useControllable';
import { Badge } from '../Badge';
import { CompactButton } from '../CompactButton';
import { Tooltip } from '../Tooltip';
import styles from './Navigation.module.css';

type NavType = 'sidebar' | 'collapsed' | 'top';
const NavCtx = createContext<NavType>('sidebar');

export interface NavItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> {
  /** Figma: Label. */
  children: ReactNode;
  /** Figma: L icon. Needed in a collapsed Sidebar. */
  icon?: ReactNode;
  /** A count or short label at the end. Figma: Badge. */
  badge?: ReactNode;
  /** Shows a caret for items that open a group. Pass the open state. Figma: Chevron. */
  expanded?: boolean;
  /** The page people are on. Figma: State=Selected. */
  selected?: boolean;
  disabled?: boolean;
  /** Renders a button instead of a link when there is no href. */
  onClick?: MouseEventHandler<HTMLElement>;
}

/** A link in a Sidebar or TopBar. In a collapsed Sidebar it shows only the icon, with the label as a tooltip. */
export const NavItem = forwardRef<HTMLElement, NavItemProps>(function NavItem(
  { children, icon, badge, expanded, selected, disabled, href, onClick, className, ...rest },
  ref,
) {
  const type = useContext(NavCtx);
  const collapsed = type === 'collapsed';
  const classes = cx(styles.item, type === 'collapsed' && styles.typeCollapsed, type === 'top' && styles.typeTop, selected && styles.selected, disabled && styles.disabled, className);
  const body = (
    <>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <span className={collapsed ? styles.srOnly : styles.label}>{children}</span>
      {!collapsed && badge !== undefined && (typeof badge === 'number' ? <Badge size="xs" count={badge} /> : typeof badge === 'string' ? <Badge size="xs">{badge}</Badge> : badge)}
      {!collapsed && expanded !== undefined && <Icon name="CaretDown" className={cx(styles.chevron, expanded && styles.chevronOpen)} />}
    </>
  );
  const common = {
    className: classes,
    'aria-current': selected ? ('page' as const) : undefined,
    'aria-expanded': expanded,
  };
  const el =
    href && !disabled ? (
      <a ref={ref as Ref<HTMLAnchorElement>} href={href} onClick={onClick} {...common} {...rest}>
        {body}
      </a>
    ) : (
      <button ref={ref as Ref<HTMLButtonElement>} type="button" disabled={disabled} onClick={onClick} {...common}>
        {body}
      </button>
    );
  return collapsed ? (
    <Tooltip content={children} side="right">
      {el}
    </Tooltip>
  ) : (
    el
  );
});

/* ---------- Sidebar ---------- */

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Logo or workspace name at the top. */
  header?: ReactNode;
  /** NavItems below the main ones, like Settings and Help. */
  footer?: ReactNode;
  /** The signed-in person, below a divider. */
  user?: ReactNode;
  /** Shows only icons. Figma: Layout=Collapsed. */
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  /** Pass to show a collapse button in the header. */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Screen reader name for the navigation landmark. */
  'aria-label'?: string;
}

/** The main app navigation down the left side. Children are NavItems. */
export function Sidebar({
  header,
  footer,
  user,
  collapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  className,
  children,
  'aria-label': label = 'Main',
  ...rest
}: SidebarProps) {
  const [isCollapsed, setCollapsed] = useControllable(collapsed, defaultCollapsed, onCollapsedChange);
  const toggle = onCollapsedChange || collapsed === undefined;
  return (
    <NavCtx.Provider value={isCollapsed ? 'collapsed' : 'sidebar'}>
      <nav aria-label={label} className={cx(styles.sidebar, isCollapsed && styles.isCollapsed, className)} {...rest}>
        {(header || toggle) && (
          <div className={styles.sidebarHeader}>
            {!isCollapsed && header && <div className={styles.brand}>{header}</div>}
            {toggle && (
              <CompactButton variant="ghost" aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'} aria-expanded={!isCollapsed} onClick={() => setCollapsed(!isCollapsed)}>
                <Icon name="SidebarSimple" />
              </CompactButton>
            )}
          </div>
        )}
        <div className={styles.items}>{children}</div>
        <div className={styles.spacer} />
        {footer && <div className={styles.items}>{footer}</div>}
        {user && (
          <>
            <hr className={styles.divider} />
            <div className={styles.user}>{user}</div>
          </>
        )}
      </nav>
    </NavCtx.Provider>
  );
}

/* ---------- Top bar ---------- */

export interface TopBarProps extends HTMLAttributes<HTMLElement> {
  /** Logo or product name on the left. */
  logo?: ReactNode;
  /** Search, notifications and the account menu on the right. */
  actions?: ReactNode;
  /** Shows a menu button on small screens, where the links are hidden. Figma: Layout=Mobile. */
  onMenuClick?: () => void;
  'aria-label'?: string;
}

/** A bar across the top of the app. Children are NavItems; they hide on small screens. */
export function TopBar({ logo, actions, onMenuClick, className, children, 'aria-label': label = 'Main', ...rest }: TopBarProps) {
  return (
    <NavCtx.Provider value="top">
      <header className={cx(styles.topBar, className)} {...rest}>
        {onMenuClick && (
          <CompactButton variant="ghost" aria-label="Open menu" className={styles.menuButton} onClick={onMenuClick}>
            <Icon name="List" />
          </CompactButton>
        )}
        {logo && <div className={styles.brand}>{logo}</div>}
        {children && (
          <nav aria-label={label} className={styles.links}>
            {children}
          </nav>
        )}
        <div className={styles.spacer} />
        {actions && <div className={styles.actions}>{actions}</div>}
      </header>
    </NavCtx.Provider>
  );
}
