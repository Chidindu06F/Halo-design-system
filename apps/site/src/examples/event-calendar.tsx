import { EventCalendar } from '@halo-ds/react';

const today = new Date();
const on = (day: number, h = 9, m = 0) => new Date(today.getFullYear(), today.getMonth(), day, h, m);

const events = [
  { id: '1', title: 'Design review', start: on(6, 10), end: on(6, 11), color: 'blue' },
  { id: '2', title: 'Team offsite', start: on(13), end: on(15), color: 'purple' },
  { id: '3', title: 'Launch', start: on(20, 14), end: on(20, 15), color: 'green' },
  { id: '4', title: 'Payroll run', start: on(27), color: 'orange' },
];

export default function Example() {
  return (
    <div style={{ width: '100%' }}>
      <EventCalendar events={events} />
    </div>
  );
}
