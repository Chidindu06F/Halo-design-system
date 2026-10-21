/**
 * Sizes and states
 * Small and large, an error, and disabled.
 */
import { Select, SelectField } from '@halo-ds/react';

const fruit = [
  { value: 'apple', label: 'Apple' },
  { value: 'mango', label: 'Mango' },
  { value: 'pear', label: 'Pear' },
];

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 300 }}>
      <Select aria-label="Small" size="sm" options={fruit} placeholder="Small" />
      <Select aria-label="Large" size="lg" options={fruit} defaultValue="mango" />
      <SelectField label="Fruit" options={fruit} error="Choose a fruit to continue." />
      <SelectField label="Fruit" options={fruit} defaultValue="pear" disabled />
    </div>
  );
}
