/**
 * Single day
 * Click the month name to jump to another month, or the year to jump to another year.
 */
import { useState } from 'react';
import { Calendar } from '@halo-ds/react';

export default function Demo() {
  const [date, setDate] = useState<Date | null>(new Date());
  return <Calendar value={date} onChange={setDate} style={{ width: 320 }} />;
}
