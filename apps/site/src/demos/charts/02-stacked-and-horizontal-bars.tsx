/**
 * Stacked and horizontal bars
 * Stacked bars show parts of a total. Horizontal bars fit long names and phones.
 */
import { BarChart } from '@halo-ds/react';

const months = [
  { month: 'Jan', card: 40, transfer: 24, cash: 12 },
  { month: 'Feb', card: 46, transfer: 28, cash: 10 },
  { month: 'Mar', card: 52, transfer: 30, cash: 9 },
];
const sources = [
  { source: 'Search', visits: 4200 },
  { source: 'Social media', visits: 2600 },
  { source: 'Newsletter', visits: 1500 },
];

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: '100%', maxWidth: 560 }}>
      <BarChart
        label="Payments by method"
        mode="stacked"
        data={months}
        xKey="month"
        series={[
          { key: 'card', label: 'Card' },
          { key: 'transfer', label: 'Transfer' },
          { key: 'cash', label: 'Cash' },
        ]}
      />
      <BarChart label="Visits by source" orientation="horizontal" data={sources} xKey="source" series={[{ key: 'visits', label: 'Visits' }]} />
    </div>
  );
}
