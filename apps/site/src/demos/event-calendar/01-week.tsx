/**
 * Week
 * Hours down the side and the week across. Overlapping events sit side by side.
 */
import { EventCalendar } from '@halo-ds/react';

const now = new Date();
const at = (dayOffset: number, h: number) => new Date(now.getFullYear(), now.getMonth(), now.getDate() + dayOffset, h);

const events = [
  { id: '1', title: 'Stand-up', start: at(0, 9), end: at(0, 10), color: 'blue' },
  { id: '2', title: 'Design review', start: at(0, 9), end: at(0, 11), color: 'purple' },
  { id: '3', title: 'Lunch with Ada', start: at(1, 12), end: at(1, 13), color: 'green' },
  { id: '4', title: 'Planning', start: at(-1, 14), end: at(-1, 16), color: 'orange' },
];

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <EventCalendar events={events} defaultView="week" />
    </div>
  );
}
