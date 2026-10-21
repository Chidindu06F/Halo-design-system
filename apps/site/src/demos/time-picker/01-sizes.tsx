/**
 * Sizes
 * Small, medium and large.
 */
import { TimePickerField } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 260 }}>
      <TimePickerField label="Small" size="sm" defaultValue="09:00" />
      <TimePickerField label="Medium" size="md" defaultValue="09:00" />
      <TimePickerField label="Large" size="lg" defaultValue="09:00" />
    </div>
  );
}
