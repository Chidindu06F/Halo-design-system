/**
 * Combobox
 * Type to filter the list, then choose one.
 */
import { ComboboxField } from '@halo-ds/react';

const fruit = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'mango', label: 'Mango' },
  { value: 'pear', label: 'Pear' },
];

export default function Demo() {
  return (
    <div style={{ width: 300, minHeight: 240 }}>
      <ComboboxField label="Fruit" options={fruit} placeholder="Search fruit" />
    </div>
  );
}
