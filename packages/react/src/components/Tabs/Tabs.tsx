import { createContext, forwardRef, useContext, useId, useRef } from 'react';
import type { HTMLAttributes, KeyboardEvent, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import { useControllable } from '../../internal/useControllable';
import { Badge } from '../Badge';
import styles from './Tabs.module.css';

interface TabsContext {
  id: string;
  value: string | undefined;
  select: (value: string) => void;
  vertical: boolean;
}
const Ctx = createContext<TabsContext | null>(null);
const useTabs = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error('Tab, TabList and TabPanel must be inside <Tabs>.');
  return c;
};
const safe = (v: string) => v.replace(/[^\w-]/g, '_');

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** line has an underline; pill has a grey pill. Figma: Style. */
  variant?: 'line' | 'pill';
  /** 32 or 40px tall. Figma: Size. */
  size?: 'sm' | 'md';
  /** horizontal, fullWidth (tabs share the width) or vertical (list on the left). Figma: Layout. */
  layout?: 'horizontal' | 'fullWidth' | 'vertical';
}

/**
 * Switches between views in the same place. Arrow keys move between tabs and show the panel;
 * Home and End jump to the ends.
 */
export function Tabs({ value, defaultValue, onValueChange, variant = 'line', size = 'md', layout = 'horizontal', className, children, ...rest }: TabsProps) {
  const id = useId();
  const [current, select] = useControllable<string | undefined>(value, defaultValue, onValueChange as (v: string | undefined) => void);
  return (
    <Ctx.Provider value={{ id, value: current, select, vertical: layout === 'vertical' }}>
      <div className={cx(styles.tabs, styles[variant], styles[size], styles[layout], className)} {...rest}>
        {children}
      </div>
    </Ctx.Provider>
  );
}

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  /** Names the set of tabs for screen readers. */
  'aria-label'?: string;
}

/** Holds the Tab buttons. */
export function TabList({ className, children, ...rest }: TabListProps) {
  const { vertical } = useTabs();
  const list = useRef<HTMLDivElement | null>(null);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const tabs = [...(list.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)') ?? [])];
    const at = tabs.indexOf(document.activeElement as HTMLButtonElement);
    if (at < 0) return;
    const next = { [vertical ? 'ArrowDown' : 'ArrowRight']: at + 1, [vertical ? 'ArrowUp' : 'ArrowLeft']: at - 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const tab = tabs[(next + tabs.length) % tabs.length];
    tab?.focus();
    tab?.click();
  };
  return (
    <div ref={list} role="tablist" aria-orientation={vertical ? 'vertical' : 'horizontal'} className={cx(styles.list, className)} onKeyDown={onKey} {...rest}>
      {children}
    </div>
  );
}

export interface TabProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'value'> {
  value: string;
  /** Icon before the label. Figma: L icon. */
  icon?: ReactNode;
  /** A count or short label after the text. Figma: Badge. */
  badge?: ReactNode;
  disabled?: boolean;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab({ value, icon, badge, disabled, className, children, onClick, ...rest }, ref) {
  const { id, value: current, select } = useTabs();
  const selected = current === value;
  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      id={`${id}-tab-${safe(value)}`}
      aria-selected={selected}
      aria-controls={`${id}-panel-${safe(value)}`}
      tabIndex={selected ? 0 : -1}
      disabled={disabled}
      className={cx(styles.tab, selected && styles.selected, className)}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) select(value);
      }}
      {...rest}
    >
      <span className={styles.content}>
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        <span className={styles.label}>{children}</span>
        {badge !== undefined && (typeof badge === 'number' || typeof badge === 'string' ? <Badge size="xs" count={typeof badge === 'number' ? badge : undefined}>{typeof badge === 'string' ? badge : undefined}</Badge> : badge)}
      </span>
    </button>
  );
});

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  /** Keep the panel in the page when hidden, to save its state. */
  keepMounted?: boolean;
}

/** The content for one Tab. Only the selected panel shows. */
export function TabPanel({ value, keepMounted, className, children, ...rest }: TabPanelProps) {
  const { id, value: current } = useTabs();
  const selected = current === value;
  if (!selected && !keepMounted) return null;
  return (
    <div
      role="tabpanel"
      id={`${id}-panel-${safe(value)}`}
      aria-labelledby={`${id}-tab-${safe(value)}`}
      hidden={!selected}
      tabIndex={0}
      className={cx(styles.panel, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
