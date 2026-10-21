/**
 * Several days
 * Each click adds or removes a day.
 */
import { useState } from 'react';
import { Calendar } from '@halo-ds/react';

export default function Demo() {
  const [dates, setDates] = useState<Date[]>([]);
  return <Calendar mode="multiple" value={dates} onChange={setDates} style={{ width: 320 }} />;
}
