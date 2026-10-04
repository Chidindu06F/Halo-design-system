import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import styles from './Divider.module.css';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** A line across, or a line between items in a row. Figma: Orientation. */
  orientation?: 'horizontal' | 'vertical';
  /** Optional text in the line, like "or". Figma: Label. */
  label?: ReactNode;
  /** Where the label sits. Figma: Label position. */
  labelPosition?: 'start' | 'center';
  /** subtle uses border/secondary, strong uses border/strong. Figma: Color. */
  color?: 'subtle' | 'strong';
  /** Figma: Style. */
  variant?: 'solid' | 'dashed';
}

/** A thin line that separates content. */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(function Divider(
  { orientation = 'horizontal', label, labelPosition = 'center', color = 'subtle', variant = 'solid', className, ...rest },
  ref,
) {
  const labelled = label != null;
  const cls = cx(
    styles.divider,
    styles[orientation],
    styles[color],
    styles[variant],
    labelled && styles.labelled,
    labelled && styles[labelPosition],
    className,
  );
  if (!labelled) return <div ref={ref} role="separator" aria-orientation={orientation} className={cls} {...rest} />;
  return (
    <div ref={ref} role="separator" aria-orientation={orientation} className={cls} {...rest}>
      <span className={styles.line} />
      <span className={styles.label}>{label}</span>
      <span className={styles.line} />
    </div>
  );
});
