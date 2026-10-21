/**
 * Small and disabled
 * A small slider for tight panels, and a disabled one.
 */
import { Slider } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 320, gap: 32 }}>
      <Slider size="sm" aria-label="Opacity" defaultValue={60} />
      <Slider label="Volume" defaultValue={40} disabled />
    </div>
  );
}
