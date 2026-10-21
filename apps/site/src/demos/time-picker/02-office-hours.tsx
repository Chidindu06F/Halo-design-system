/**
 * Office hours
 * Every 15 minutes between 08:00 and 18:00, in 24-hour time.
 */
import { TimePickerField } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: 260 }}>
      <TimePickerField label="Meeting time" step={15} hourCycle={24} min="08:00" max="18:00" defaultValue="14:15" />
    </div>
  );
}
