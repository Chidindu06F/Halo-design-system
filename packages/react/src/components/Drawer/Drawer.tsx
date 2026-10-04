import { useId, useRef } from 'react';
import type { ReactNode } from 'react';
import { cx } from '../../internal/cx';
import { useModal } from '../../internal/dialog';
import { Portal } from '../../internal/floating';
import { Icon } from '../../internal/Icon';
import { CompactButton } from '../CompactButton';
import { Overlay } from '../Overlay';
import styles from './Drawer.module.css';

export interface DrawerProps {
  open: boolean;
  /** Called on Escape, the close button, or a click on the overlay. */
  onClose: () => void;
  /** Figma: Title. */
  title: ReactNode;
  /** Figma: Description. */
  description?: ReactNode;
  /** Which edge it slides in from. Bottom suits phones. Figma: Side. */
  side?: 'right' | 'left' | 'bottom';
  /** Width for side drawers: 320, 400 or 560px. Figma: Size. */
  size?: 'sm' | 'md' | 'lg';
  /** Figma: Show close. */
  showClose?: boolean;
  /** Buttons in the footer. Figma: Actions. */
  actions?: ReactNode;
  closeOnOverlayClick?: boolean;
  overlay?: 'dim' | 'blur';
  /** The body, which scrolls when it is long. Figma: Content slot. */
  children?: ReactNode;
  className?: string;
}

/**
 * A panel that slides in from an edge for details, filters or a form, keeping the page in view.
 * Behaves like a Modal: focus stays inside and Escape closes it.
 */
export function Drawer({
  open,
  onClose,
  title,
  description,
  side = 'right',
  size = 'md',
  showClose = true,
  actions,
  closeOnOverlayClick = true,
  overlay = 'dim',
  children,
  className,
}: DrawerProps) {
  const id = useId();
  const panel = useRef<HTMLDivElement | null>(null);
  useModal(open, panel, onClose);
  if (!open) return null;

  return (
    <Portal>
      <Overlay
        variant={overlay}
        position={side}
        onPointerDown={(e) => {
          if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
        }}
      >
        <div
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${id}-title`}
          aria-describedby={description ? `${id}-desc` : undefined}
          tabIndex={-1}
          className={cx(styles.drawer, styles[side], side !== 'bottom' && styles[size], className)}
        >
          {side === 'bottom' && (
            <div className={styles.handle} aria-hidden="true">
              <span className={styles.grip} />
            </div>
          )}
          <div className={styles.header}>
            <div className={styles.text}>
              <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
              {description && <p id={`${id}-desc`} className={styles.description}>{description}</p>}
            </div>
            {showClose && (
              <CompactButton variant="ghost" aria-label="Close" onClick={onClose}>
                <Icon name="X" />
              </CompactButton>
            )}
          </div>
          <div className={styles.content}>{children}</div>
          {actions && <div className={styles.footer}>{actions}</div>}
        </div>
      </Overlay>
    </Portal>
  );
}
