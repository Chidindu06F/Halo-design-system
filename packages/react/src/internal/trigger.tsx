import { cloneElement, isValidElement } from 'react';
import type { MouseEvent, ReactElement, Ref } from 'react';
import { mergeRefs } from './floating';

type TriggerProps = {
  ref?: Ref<HTMLElement>;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-haspopup'?: string | boolean;
};

/** Adds open/close wiring to the element that opens a floating panel. */
export function cloneTrigger(
  trigger: ReactElement,
  { ref, open, id, haspopup, onToggle }: { ref: Ref<HTMLElement>; open: boolean; id: string; haspopup: string; onToggle: () => void },
) {
  if (!isValidElement(trigger)) return trigger;
  const el = trigger as ReactElement<TriggerProps>;
  const childRef = (el.props.ref ?? (el as unknown as { ref?: Ref<HTMLElement> }).ref) as Ref<HTMLElement> | undefined;
  return cloneElement(el, {
    ref: mergeRefs(ref, childRef),
    'aria-expanded': open,
    'aria-controls': open ? id : undefined,
    'aria-haspopup': haspopup,
    onClick: (e: MouseEvent<HTMLElement>) => {
      el.props.onClick?.(e);
      if (!e.defaultPrevented) onToggle();
    },
  });
}
