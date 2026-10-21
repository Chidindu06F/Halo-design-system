/**
 * Trends
 * Up, down and no change. Churn going down is good news, so it uses sentiment="positive".
 */
import { Statistic } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-grid-2">
      <Statistic label="Revenue" value={48920} prefix="$" change="+5.6%" trend="up" comparison="vs last month" />
      <Statistic label="Orders" value={312} change="-3.2%" trend="down" comparison="vs last month" />
      <Statistic label="Churn rate" value={2.3} precision={1} suffix="%" change="-0.4%" trend="down" sentiment="positive" comparison="vs last month" />
      <Statistic label="Seats" value={24} change="0%" trend="flat" comparison="vs last month" />
    </div>
  );
}
