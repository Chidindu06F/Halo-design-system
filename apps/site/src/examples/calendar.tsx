import { useState } from 'react';
import { Calendar } from '@halo-ds/react';
import type { DateRange } from '@halo-ds/react';

export default function Example() {
  const [range, setRange] = useState<DateRange | null>(null);
  return <Calendar mode="range" value={range} onChange={setRange} />;
}
