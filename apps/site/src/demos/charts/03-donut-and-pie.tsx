/**
 * Donut and pie
 * Parts of a whole. The donut shows a total in the middle.
 */
import { PieChart } from '@halo-ds/react';

const spending = [
  { label: 'Bills', value: 194 },
  { label: 'Food', value: 122 },
  { label: 'Transport', value: 97 },
  { label: 'Shopping', value: 73 },
];

export default function Demo() {
  return (
    <div className="demo-row" style={{ gap: 40 }}>
      <PieChart label="Spending by category" centerLabel="Spent" data={spending} />
      <PieChart label="Spending by category" variant="pie" data={spending} />
    </div>
  );
}
