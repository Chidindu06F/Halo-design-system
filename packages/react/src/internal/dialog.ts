import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

let locks = 0;
// Open dialogs, newest last. Only the top one reacts to keys.
const stack: object[] = [];

/**
 * Modal behaviour for Modal and Drawer: moves focus in, keeps Tab inside, closes on Escape,
 * stops the page scrolling, and puts focus back where it was on close.
 */
export function useModal(open: boolean, panel: RefObject<HTMLElement | null>, onClose: () => void) {
  const latest = useRef(onClose);
  latest.current = onClose;

  useEffect(() => {
    if (!open) return;
    const before = document.activeElement as HTMLElement | null;
    const el = panel.current;
    const first = el?.querySelector<HTMLElement>('[data-autofocus]') ?? el?.querySelector<HTMLElement>(FOCUSABLE);
    (first ?? el)?.focus();

    if (locks++ === 0) {
      const gap = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (gap) document.body.style.paddingRight = `${gap}px`;
    }

    const self = {};
    stack.push(self);
    const onKey = (e: KeyboardEvent) => {
      if (stack[stack.length - 1] !== self) return;
      if (e.key === 'Escape') {
        e.stopPropagation();
        latest.current();
      } else if (e.key === 'Tab' && el) {
        const items = [...el.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((x) => x.offsetParent !== null);
        if (!items.length) return e.preventDefault();
        const a = items[0]!;
        const z = items[items.length - 1]!;
        if (e.shiftKey && (document.activeElement === a || document.activeElement === el)) {
          e.preventDefault();
          z.focus();
        } else if (!e.shiftKey && document.activeElement === z) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      stack.splice(stack.indexOf(self), 1);
      if (--locks === 0) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
      before?.focus?.();
    };
  }, [open, panel]);
}
