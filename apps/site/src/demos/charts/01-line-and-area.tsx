/**
 * Line and area
 * Lines for change over time. A light fill under the line shows volume.
 */
import { AreaChart, LineChart } from '@halo-ds/react';

const week = [
  { day: 'Mon', users: 320 },
  { day: 'Tue', users: 410 },
  { day: 'Wed', users: 380 },
  { day: 'Thu', users: 520 },
  { day: 'Fri', users: 490 },
  { day: 'Sat', users: 300 },
  { day: 'Sun', users: 280 },
];

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: '100%', maxWidth: 560 }}>
      <LineChart label="Active users" data={week} xKey="day" series={[{ key: 'users', label: 'Active users' }]} height={200} />
      <AreaChart label="Active users" data={week} xKey="day" series={[{ key: 'users', label: 'Active users' }]} height={200} />
    </div>
  );
}
