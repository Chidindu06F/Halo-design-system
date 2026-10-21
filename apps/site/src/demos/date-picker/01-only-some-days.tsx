/**
 * Only some days
 * Weekdays from today on. Other days can not be picked.
 */
import { DatePickerField } from '@halo-ds/react';

const today = new Date();

export default function Demo() {
  return (
    <div style={{ width: 300 }}>
      <DatePickerField label="Delivery day" hint="Weekdays only" min={today} isDateDisabled={(d) => d.getDay() === 0 || d.getDay() === 6} />
    </div>
  );
}
