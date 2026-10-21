import { useState } from 'react';
import { SegmentedControl } from '@halo-ds/react';

export default function Example() {
  const [view, setView] = useState('month');
  return (
    <SegmentedControl
      aria-label="View"
      value={view}
      onValueChange={setView}
      options={[
        { value: 'day', label: 'Day' },
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month' },
      ]}
    />
  );
}
