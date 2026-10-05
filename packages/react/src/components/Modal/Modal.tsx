import { useId, useRef } from 'react';
import type { ReactNode } from 'react';
import { cx } from '../../internal/cx';
import { useModal } from '../../internal/dialog';
import { Portal } from '../../internal/floating';
import { Icon } from '../../internal/Icon';
import { CompactButton } from '../CompactButton';
import { Overlay } from '../Overlay';
import styles from './Modal.module.css';

export interface ModalProps {
  open: boolean;
  /** Called on Escape, the close button, or a click on the overlay. */
  onClose: () => void;
  /** Figma: Title. */
  title: ReactNode;
  /** Figma: Description. */
  description?: ReactNode;
  /** destructive uses a red icon. Pair it with a destructive Button. Figma: Type. */
  type?: 'default' | 'destructive';
  /** Replaces the icon in the circle, or false to hide it. Figma: Icon. */
  icon?: ReactNode | false;
  /** horizontal puts the buttons in a row on the right; stacked makes them full width. Figma: Layout. */
  layout?: 'horizontal' | 'stacked';
  /** Figma: Show close. */
  showClose?: boolean;
  /** Buttons. Put the main action last in a row, first when stacked. Figma: Actions. */
  actions?: ReactNode;
  /** Closes when the overlay is clicked. Turn off when closing would lose work. */
  closeOnOverlayClick?: boolean;
  /** Overlay style. */
  overlay?: 'dim' | 'blur';
  /** Extra content between the text and the buttons, like a form. Figma: Content slot. */
  children?: ReactNode;
  className?: string;
}

/**
 * A dialog that blocks the page until people respond. Focus moves in and stays inside,
 * Escape closes it, and focus goes back to the button that opened it.
 * Add `data-autofocus` to the element that should get focus first.
 */
export function Modal({
  open,
  onClose,
  title,
  description,
  type = 'default',
  icon,
  layout = 'horizontal',
  showClose = true,
  actions,
  closeOnOverlayClick = true,
  overlay = 'dim',
  children,
  className,
}: ModalProps) {
  const id = useId();
  const panel = useRef<HTMLDivElement | null>(null);
  useModal(open, panel, onClose);
  if (!open) return null;

  const shownIcon = icon === false ? null : icon ?? <Icon name={type === 'destructive' ? 'Warning' : 'Info'} />;
  return (
    <Portal>
      <Overlay
        variant={overlay}
        onPointerDown={(e) => {
          if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
        }}
      >
        <div
          ref={panel}
          role={type === 'destructive' ? 'alertdialog' : 'dialog'}
          aria-modal="true"
          aria-labelledby={`${id}-title`}
          aria-describedby={description ? `${id}-desc` : undefined}
          tabIndex={-1}
          className={cx(styles.modal, styles[type], styles[layout], className)}
        >
          <div className={styles.header}>
            {shownIcon && <span className={styles.icon} aria-hidden="true">{shownIcon}</span>}
            <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
            {showClose && (
              <CompactButton variant="ghost" aria-label="Close" className={styles.close} onClick={onClose}>
                <Icon name="X" />
              </CompactButton>
            )}
          </div>
          {description && <p id={`${id}-desc`} className={styles.description}>{description}</p>}
          {children && <div className={styles.content}>{children}</div>}
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      </Overlay>
    </Portal>
  );
}
