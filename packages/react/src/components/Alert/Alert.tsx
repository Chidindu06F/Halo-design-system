import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import { Icon } from '../../internal/Icon';
import type { IconName } from '../../internal/iconPaths';
import { CompactButton } from '../CompactButton';
import styles from './Alert.module.css';

export type AlertType = 'information' | 'success' | 'warning' | 'error';

export const STATUS_ICONS: Record<AlertType, IconName> = {
  information: 'Info',
  success: 'CheckCircle',
  warning: 'Warning',
  error: 'WarningCircle',
};

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Sets the colour and default icon. Figma: Type. */
  type?: AlertType;
  /** soft is tinted, outline is white with a coloured icon, filled is solid colour. Figma: Style. */
  variant?: 'soft' | 'outline' | 'filled';
  /** inline stacks the text in a box; banner is one row across the top of a page. Figma: Layout. */
  layout?: 'inline' | 'banner';
  /** Figma: Size. */
  size?: 'md' | 'sm';
  /** Figma: Title. */
  title: ReactNode;
  /** Supporting text. Figma: Description. */
  description?: ReactNode;
  /** Replaces the type icon, or false to hide it. Figma: L icon. */
  icon?: ReactNode | false;
  /** Buttons, usually one small secondary Button. Figma: Actions. */
  actions?: ReactNode;
  /** Shows a close button and calls this when it is pressed. Figma: Show close. */
  onClose?: () => void;
  closeLabel?: string;
}

/**
 * A message about the page or a task, like an error to fix or a new version to load.
 * Errors and warnings are announced straight away; others are announced politely.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { type = 'information', variant = 'soft', layout = 'inline', size = 'md', title, description, icon, actions, onClose, closeLabel = 'Dismiss', className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role={type === 'error' || type === 'warning' ? 'alert' : 'status'}
      className={cx(styles.alert, styles[type], styles[variant], styles[layout], styles[size], className)}
      {...rest}
    >
      {icon !== false && (
        <span className={styles.icon} aria-hidden="true">
          {icon ?? <Icon name={STATUS_ICONS[type]} />}
        </span>
      )}
      <div className={styles.body}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          {description && <div className={styles.description}>{description}</div>}
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {onClose && (
        <CompactButton variant="ghost" size={size === 'sm' ? 'md' : 'lg'} aria-label={closeLabel} className={styles.close} onClick={onClose}>
          <Icon name="X" />
        </CompactButton>
      )}
    </div>
  );
});
