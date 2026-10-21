/**
 * Checked
 * Off, on and indeterminate, in both sizes.
 */
import { Checkbox } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row" style={{ alignItems: 'flex-start', gap: 40 }}>
      {(['sm', 'md'] as const).map((s) => (
        <div key={s} className="demo-stack">
          <Checkbox size={s} label="Off" />
          <Checkbox size={s} label="On" defaultChecked />
          <Checkbox size={s} label="Indeterminate" indeterminate />
        </div>
      ))}
    </div>
  );
}
