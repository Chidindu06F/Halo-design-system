import { createContext, forwardRef, useContext, useId } from 'react';
import type { FieldsetHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import { Icon } from '../../internal/Icon';
import { useControllable } from '../../internal/useControllable';
import { FieldLabel } from '../Field';
import styles from './Radio.module.css';

export type RadioSize = 'sm' | 'md';

interface GroupCtx {
  name: string;
  value: string | undefined;
  setValue: (v: string) => void;
  size: RadioSize;
  invalid: boolean;
  disabled: boolean;
}
const RadioGroupContext = createContext<GroupCtx | null>(null);

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** What choosing this option means. Figma: Label. */
  label?: ReactNode;
  /** Extra detail under the label. Figma: Description. */
  description?: ReactNode;
  /** 16px (sm) or 20px (md) circle. Set on the group instead when inside one. Figma: Size. */
  size?: RadioSize;
  /** The value sent when this option is chosen. */
  value: string;
  invalid?: boolean;
}

/** One option in a RadioGroup. A single radio on its own can't be unchosen; use a Checkbox for that. */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, description, size, value, invalid, disabled, className, id, onChange, ...rest },
  ref,
) {
  const g = useContext(RadioGroupContext);
  const autoId = useId();
  const inputId = id ?? autoId;
  const descId = description ? `${inputId}-description` : undefined;
  const s = size ?? g?.size ?? 'md';
  const isDisabled = disabled ?? g?.disabled;
  const isInvalid = invalid ?? g?.invalid;
  return (
    <label className={cx(styles.field, styles[s], isDisabled && styles.disabled, className)} htmlFor={inputId}>
      <span className={styles.control}>
        <input
          {...rest}
          ref={ref}
          id={inputId}
          type="radio"
          className={styles.input}
          value={value}
          name={g?.name ?? rest.name}
          checked={g ? g.value === value : rest.checked}
          disabled={isDisabled}
          aria-invalid={isInvalid || undefined}
          aria-describedby={descId}
          onChange={(e) => {
            g?.setValue(value);
            onChange?.(e);
          }}
        />
      </span>
      {(label || description) && (
        <span className={styles.text}>
          {label && <span className={styles.label}>{label}</span>}
          {description && <span id={descId} className={styles.description}>{description}</span>}
        </span>
      )}
    </label>
  );
});

export interface RadioGroupProps extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange' | 'defaultValue'> {
  /** Names the group with a Field label. Figma: Label. */
  label: ReactNode;
  /** Hides the label visually but keeps it for screen readers. */
  hideLabel?: boolean;
  required?: boolean;
  optional?: boolean;
  /** Help under the options. Figma: Hint. */
  hint?: ReactNode;
  /** An error message. Turns every circle red. Figma: State=Error. */
  error?: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Stack the options, or put two or three short ones in a row. Figma: Orientation. */
  orientation?: 'vertical' | 'horizontal';
  size?: RadioSize;
  /** Form field name. Generated when left out. */
  name?: string;
  children: ReactNode;
}

/** A labelled set of radios where exactly one can be chosen. Arrow keys move between them. */
export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(function RadioGroup(
  { label, hideLabel, required, optional, hint, error, value, defaultValue, onValueChange, orientation = 'vertical', size = 'md', name, disabled = false, className, children, ...rest },
  ref,
) {
  const autoName = useId();
  const [v, setV] = useControllable<string | undefined>(value, defaultValue, onValueChange as (v: string | undefined) => void);
  const hintId = `${autoName}-hint`;
  const message = error ?? hint;
  return (
    <fieldset
      ref={ref}
      className={cx(styles.group, className)}
      disabled={disabled}
      aria-describedby={message ? hintId : undefined}
      aria-required={required || undefined}
      {...rest}
    >
      <legend className={hideLabel ? styles.srOnly : styles.legend}>
        <FieldLabel required={required} optional={optional}>{label}</FieldLabel>
      </legend>
      <RadioGroupContext.Provider value={{ name: name ?? autoName, value: v, setValue: setV, size, invalid: error != null, disabled }}>
        <div role="radiogroup" className={cx(styles.options, styles[orientation], styles[size])}>{children}</div>
      </RadioGroupContext.Provider>
      {message && (
        <span id={hintId} className={cx(styles.hint, error != null && styles.error)}>
          {error != null && <Icon name="WarningCircle" className={styles.hintIcon} />}
          {message}
        </span>
      )}
    </fieldset>
  );
});
