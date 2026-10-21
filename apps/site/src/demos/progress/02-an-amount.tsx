/**
 * An amount
 * Show an amount instead of a percentage, like storage used.
 */
import { ProgressBar } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: 360 }}>
      <ProgressBar value={72} label="Storage" valueLabel="7.2 of 10 GB" hint="Upgrade your plan for more space." />
    </div>
  );
}
