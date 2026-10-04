import { useId } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { cx } from '../../internal/cx';
import { useControllable } from '../../internal/useControllable';
import styles from './Slider.module.css';

interface SliderBase {
  min?: number;
  max?: number;
  step?: number;
  /** 4px track with a 16px handle (sm), or 6px with 20px (md). Figma: Size. */
  size?: 'sm' | 'md';
  disabled?: boolean;
  /** Names the slider. Shown above it with the value. Figma: Label. */
  label?: ReactNode;
  /** Shows the current value next to the label. Figma: Value. */
  showValue?: boolean;
  /** Shows min and max under the ends. Figma: Min max. */
  showMinMax?: boolean;
  /** Turns a number into readable text, like "40%". Used on screen and for screen readers. */
  formatValue?: (value: number) => string;
  /** Screen reader name when there is no visible label. */
  'aria-label'?: string;
  className?: string;
}

export interface SliderProps extends SliderBase {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
}

export interface RangeSliderProps extends SliderBase {
  value?: [number, number];
  defaultValue?: [number, number];
  onValueChange?: (value: [number, number]) => void;
  /** Screen reader names for the two handles. */
  handleLabels?: [string, string];
}

const pct = (v: number, min: number, max: number) => ((v - min) / (max - min)) * 100;

function Frame({ id, label, valueText, showMinMax, min, max, fmt, size, className, children }: {
  id: string; label?: ReactNode; valueText?: string; showMinMax?: boolean; min: number; max: number;
  fmt: (v: number) => string; size: 'sm' | 'md'; className?: string; children: ReactNode;
}) {
  return (
    <div className={cx(styles.field, styles[size], className)}>
      {(label || valueText) && (
        <div className={styles.header}>
          {label && <span id={`${id}-label`} className={styles.label}>{label}</span>}
          {valueText && <span className={styles.value} aria-hidden="true">{valueText}</span>}
        </div>
      )}
      {children}
      {showMinMax && (
        <div className={styles.ends} aria-hidden="true">
          <span>{fmt(min)}</span>
          <span>{fmt(max)}</span>
        </div>
      )}
    </div>
  );
}

/** Picks a rough value by dragging along a track. Arrow keys, Page Up and Down, Home and End work. */
export function Slider({ value, defaultValue, onValueChange, min = 0, max = 100, step = 1, size = 'md', disabled, label, showValue = true, showMinMax, formatValue, className, ...rest }: SliderProps) {
  const id = useId();
  const fmt = formatValue ?? String;
  const [v, setV] = useControllable(value, defaultValue ?? min, onValueChange);
  return (
    <Frame id={id} label={label} valueText={showValue && label ? fmt(v) : undefined} showMinMax={showMinMax} min={min} max={max} fmt={fmt} size={size} className={className}>
      <div className={styles.track} style={{ '--from': '0%', '--to': `${pct(v, min, max)}%` } as CSSProperties}>
        <input
          type="range"
          className={styles.range}
          min={min}
          max={max}
          step={step}
          value={v}
          disabled={disabled}
          aria-labelledby={label ? `${id}-label` : undefined}
          aria-label={rest['aria-label']}
          aria-valuetext={fmt(v)}
          onChange={(e) => setV(Number(e.target.value))}
        />
      </div>
    </Frame>
  );
}

/** Picks a start and an end, like a price range. Two handles that can't cross. */
export function RangeSlider({ value, defaultValue, onValueChange, min = 0, max = 100, step = 1, size = 'md', disabled, label, showValue = true, showMinMax, formatValue, handleLabels = ['Minimum', 'Maximum'], className }: RangeSliderProps) {
  const id = useId();
  const fmt = formatValue ?? String;
  const [[a, b], setV] = useControllable<[number, number]>(value, defaultValue ?? [min, max], onValueChange);
  return (
    <Frame id={id} label={label} valueText={showValue && label ? `${fmt(a)} to ${fmt(b)}` : undefined} showMinMax={showMinMax} min={min} max={max} fmt={fmt} size={size} className={className}>
      <div className={cx(styles.track, styles.dual)} style={{ '--from': `${pct(a, min, max)}%`, '--to': `${pct(b, min, max)}%` } as CSSProperties}>
        <input
          type="range"
          className={styles.range}
          min={min}
          max={max}
          step={step}
          value={a}
          disabled={disabled}
          aria-label={handleLabels[0]}
          aria-valuetext={fmt(a)}
          onChange={(e) => setV([Math.min(Number(e.target.value), b), b])}
        />
        <input
          type="range"
          className={styles.range}
          min={min}
          max={max}
          step={step}
          value={b}
          disabled={disabled}
          aria-label={handleLabels[1]}
          aria-valuetext={fmt(b)}
          onChange={(e) => setV([a, Math.max(Number(e.target.value), a)])}
        />
      </div>
    </Frame>
  );
}
