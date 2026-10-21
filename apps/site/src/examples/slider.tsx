import { RangeSlider, Slider } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 32, width: 320 }}>
      <Slider label="Volume" defaultValue={60} />
      <RangeSlider label="Price" min={0} max={500} defaultValue={[80, 320]} formatValue={(v) => `$${v}`} />
    </div>
  );
}
