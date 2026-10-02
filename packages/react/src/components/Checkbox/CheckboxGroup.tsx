import { forwardRef } from 'react';
import type { FieldsetHTMLAttributes, ReactNode } from 'react';
import type { CheckboxSize } from './Checkbox';
import styles from './Checkbox.module.css';

export interface CheckboxGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** Names the group. Screen readers read it with each option. Figma: Label. */
  label: ReactNode;
  /** Hides the label visually but keeps it for screen readers. Figma: Show label off. */
  hideLabel?: boolean;
  /** Spacing and label size. Match it to the checkboxes inside. Figma: Size. */
  size?: CheckboxSize;
  /** `Checkbox` elements. Figma: Items slot. */
  children: ReactNode;
}

/** A labelled list of checkboxes. */
export const CheckboxGroup = forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(function CheckboxGroup(
  { label, hideLabel = false, size = 'md', className, children, ...rest },
  ref,
) {
  return (
    <fieldset ref={ref} className={[styles.group, styles[size], className].filter(Boolean).join(' ')} {...rest}>
      <legend className={hideLabel ? styles.srOnly : styles.legend}>{label}</legend>
      <div className={styles.items}>{children}</div>
    </fieldset>
  );
});
