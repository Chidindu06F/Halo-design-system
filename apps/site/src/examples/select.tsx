import { Combobox, SelectField } from '@halo-ds/react';

const countries = [
  { value: 'gh', label: 'Ghana' },
  { value: 'ke', label: 'Kenya' },
  { value: 'ng', label: 'Nigeria' },
  { value: 'za', label: 'South Africa' },
];

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 20, width: 320 }}>
      <SelectField label="Country" placeholder="Choose a country" options={countries} />
      <Combobox multiple aria-label="Countries" placeholder="Search countries" options={countries} defaultValue={['ng']} />
    </div>
  );
}
