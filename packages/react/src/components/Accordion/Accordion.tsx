import { createContext, forwardRef, useCallback, useContext, useId, useMemo, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Accordion.module.css';

type AccordionType = 'single' | 'multiple';

interface AccordionContextValue {
  isOpen: (value: string) => boolean;
  toggle: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
  /** single: opening one item closes the others. multiple: any number can be open. */
  type?: AccordionType;
  /** Items open on first render (their `value`s). */
  defaultValue?: string[];
  /** Controlled open items. Pair with onValueChange. */
  value?: string[];
  onValueChange?: (value: string[]) => void;
  children: ReactNode;
}

/** A stack of AccordionItems. Manages which ones are open. */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(function Accordion(
  { type = 'multiple', defaultValue = [], value, onValueChange, className, children, ...rest },
  ref,
) {
  const [internal, setInternal] = useState<string[]>(defaultValue);
  const open = value ?? internal;
  const setOpen = useCallback(
    (next: string[]) => {
      if (value === undefined) setInternal(next);
      onValueChange?.(next);
    },
    [value, onValueChange],
  );
  const ctx = useMemo<AccordionContextValue>(
    () => ({
      isOpen: (v) => open.includes(v),
      toggle: (v) => {
        if (open.includes(v)) setOpen(open.filter((x) => x !== v));
        else setOpen(type === 'single' ? [v] : [...open, v]);
      },
    }),
    [open, setOpen, type],
  );

  return (
    <AccordionContext.Provider value={ctx}>
      <div ref={ref} className={className} {...rest}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The section title. Figma: Title. */
  title: ReactNode;
  /** The content slot. Figma: Content. Put anything inside. */
  children: ReactNode;
  /** Identifies the item inside an Accordion. Defaults to an auto id. */
  value?: string;
  /** Open on first render when used on its own (outside an Accordion). Figma: State. */
  defaultOpen?: boolean;
  /** Line under the item. Turn off for the last item inside a card. Figma: Divider. */
  divider?: boolean;
  disabled?: boolean;
  /** Heading level for the title, to fit the page outline. */
  headingLevel?: 2 | 3 | 4 | 5 | 6;
}

/** One expandable row: a header button and a content slot. */
export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(function AccordionItem(
  { title, children, value, defaultOpen = false, divider = true, disabled = false, headingLevel = 3, className, ...rest },
  ref,
) {
  const autoId = useId();
  const itemValue = value ?? autoId;
  const ctx = useContext(AccordionContext);
  const [localOpen, setLocalOpen] = useState(defaultOpen);
  const open = !disabled && (ctx ? ctx.isOpen(itemValue) : localOpen);
  const toggle = () => (ctx ? ctx.toggle(itemValue) : setLocalOpen((o) => !o));

  const Heading = `h${headingLevel}` as const;
  const headerId = `${autoId}-header`;
  const panelId = `${autoId}-panel`;
  const classes = [styles.item, open && styles.open, divider && styles.divider, disabled && styles.disabled, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes} {...rest}>
      <Heading className={styles.heading}>
        <button
          type="button"
          id={headerId}
          className={styles.header}
          aria-expanded={open}
          aria-controls={panelId}
          disabled={disabled}
          onClick={toggle}
        >
          <span className={styles.title}>{title}</span>
          {/* Looks like a Ghost Compact button, but it's part of the header button. */}
          <span className={styles.iconBox} aria-hidden="true">
            <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor">
              {open ? (
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" />
              ) : (
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
              )}
            </svg>
          </span>
        </button>
      </Heading>
      <div id={panelId} role="region" aria-labelledby={headerId} className={styles.panel} inert={!open} aria-hidden={!open}>
        <div className={styles.panelInner}>
          <div className={styles.panelBody}>{children}</div>
        </div>
      </div>
    </div>
  );
});
