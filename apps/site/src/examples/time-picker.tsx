import { TimePickerField } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ width: 280 }}>
      <TimePickerField label="Start time" min="08:00" max="18:00" defaultValue="09:30" />
    </div>
  );
}
