/**
 * Several dates
 * Separate days shown as tags. Each click adds or removes a day.
 */
import { useState } from 'react';
import { MultiDatePickerField } from '@halo-ds/react';

const today = new Date();

export default function Demo() {
  const [dates, setDates] = useState<Date[]>([]);
  return (
    <div style={{ width: 320 }}>
      <MultiDatePickerField label="Days off" hint="Pick up to 5 days." maxCount={5} min={today} value={dates} onValueChange={setDates} />
    </div>
  );
}
