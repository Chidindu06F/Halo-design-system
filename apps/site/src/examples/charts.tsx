import { BarChart } from '@halo-ds/react';

const data = [
  { month: 'Jan', online: 120, store: 80 },
  { month: 'Feb', online: 150, store: 90 },
  { month: 'Mar', online: 170, store: 70 },
  { month: 'Apr', online: 210, store: 95 },
  { month: 'May', online: 190, store: 110 },
  { month: 'Jun', online: 240, store: 105 },
];

export default function Example() {
  return (
    <div style={{ width: '100%', maxWidth: 640 }}>
      <BarChart
        label="Sales by channel"
        data={data}
        xKey="month"
        series={[
          { key: 'online', label: 'Online' },
          { key: 'store', label: 'In store' },
        ]}
      />
    </div>
  );
}
