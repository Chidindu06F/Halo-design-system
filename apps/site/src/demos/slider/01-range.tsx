/**
 * Range
 * Two handles for a start and an end, with the limits shown.
 */
import { RangeSlider } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: 320 }}>
      <RangeSlider label="Price" min={0} max={200} defaultValue={[20, 60]} showMinMax handleLabels={['Minimum price', 'Maximum price']} />
    </div>
  );
}
