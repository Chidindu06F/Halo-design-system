import { DatePickerField, DateRangePickerField } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 20, width: 320 }}>
      <DatePickerField label="Due date" />
      <DateRangePickerField label="Trip" />
    </div>
  );
}
