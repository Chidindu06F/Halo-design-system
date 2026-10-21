/**
 * Simple header
 * Just the title and arrows, with no view switch.
 */
import { EventCalendar } from '@halo-ds/react';

const now = new Date();
const on = (day: number) => new Date(now.getFullYear(), now.getMonth(), day, 10);

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <EventCalendar header="simple" events={[{ id: '1', title: 'Payroll run', start: on(25), color: 'green' }]} />
    </div>
  );
}
