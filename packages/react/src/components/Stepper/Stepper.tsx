import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import { Icon } from '../../internal/Icon';
import styles from './Stepper.module.css';

export interface StepperStep {
  /** Figma: Title. */
  title: ReactNode;
  /** Figma: Description. */
  description?: ReactNode;
  /** Marks a step with a problem, like a form section with errors. Figma: State=Error. */
  error?: boolean;
}

export interface StepperProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  steps: StepperStep[];
  /** Index of the current step, starting at 0. Earlier steps show as complete. */
  current: number;
  /** horizontal, vertical, or compact (a title and a segmented bar for small screens). Figma: Orientation. */
  orientation?: 'horizontal' | 'vertical' | 'compact';
  /** Compact only: shows "Next: …" with the next step's title. Figma: Next step. */
  showNext?: boolean;
  /** Screen reader name for the steps. */
  'aria-label'?: string;
}

type Status = 'complete' | 'current' | 'upcoming' | 'error';

/** Shows progress through a task with several steps, like checkout or onboarding. */
export function Stepper({ steps, current, orientation = 'horizontal', showNext = true, className, 'aria-label': label = 'Progress', ...rest }: StepperProps) {
  const statusOf = (i: number): Status => (steps[i]?.error ? 'error' : i < current ? 'complete' : i === current ? 'current' : 'upcoming');

  if (orientation === 'compact') {
    const step = steps[current];
    const next = steps[current + 1];
    return (
      <nav aria-label={label} className={cx(styles.compact, className)} {...rest}>
        <div className={styles.compactHeader}>
          <div className={styles.compactCurrent}>
            <span className={styles.count}>Step {current + 1} of {steps.length}</span>
            <span className={styles.compactTitle} aria-current="step">{step?.title}</span>
          </div>
          {showNext && next && <span className={styles.count}>Next: {next.title}</span>}
        </div>
        <div className={styles.segments} aria-hidden="true">
          {steps.map((_, i) => (
            <span key={i} className={cx(styles.segment, i <= current && styles.segmentDone, statusOf(i) === 'error' && styles.segmentError)} />
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav aria-label={label} className={className} {...rest}>
      <ol className={cx(styles.stepper, styles[orientation])}>
        {steps.map((step, i) => {
          const status = statusOf(i);
          const last = i === steps.length - 1;
          const connectorDone = i < current;
          const indicator = (
            <span className={cx(styles.indicator, styles[status])} aria-hidden="true">
              {status === 'complete' ? <Icon name="Check" /> : status === 'error' ? <Icon name="ExclamationMark" /> : i + 1}
            </span>
          );
          const connector = !last && <span className={cx(styles.connector, connectorDone && styles.connectorDone)} aria-hidden="true" />;
          return (
            <li key={i} className={cx(styles.step, styles[status])} aria-current={status === 'current' ? 'step' : undefined}>
              {orientation === 'vertical' ? (
                <span className={styles.rail}>
                  {indicator}
                  {connector}
                </span>
              ) : (
                indicator
              )}
              <span className={styles.text}>
                <span className={styles.title}>
                  {step.title}
                  <span className={styles.srOnly}>{status === 'complete' ? ', complete' : status === 'error' ? ', has errors' : ''}</span>
                </span>
                {step.description && <span className={styles.description}>{step.description}</span>}
              </span>
              {orientation === 'horizontal' && connector && <span className={styles.connectorWrap}>{connector}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
