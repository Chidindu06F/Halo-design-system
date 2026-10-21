/**
 * Several values
 * Choices show as tags, and people can add new ones. Backspace removes the last tag.
 */
import { useState } from 'react';
import { ComboboxField } from '@halo-ds/react';

export default function Demo() {
  const [options, setOptions] = useState([
    { value: 'apple', label: 'Apple' },
    { value: 'mango', label: 'Mango' },
    { value: 'pear', label: 'Pear' },
  ]);
  const [value, setValue] = useState(['apple', 'mango']);
  return (
    <div style={{ width: 320, minHeight: 240 }}>
      <ComboboxField
        label="Fruit"
        multiple
        options={options}
        value={value}
        onValueChange={setValue}
        onCreate={(text) => {
          const v = text.toLowerCase();
          setOptions([...options, { value: v, label: text }]);
          setValue([...value, v]);
        }}
      />
    </div>
  );
}
