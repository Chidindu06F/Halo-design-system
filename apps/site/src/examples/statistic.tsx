import { Card, Statistic } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, width: '100%' }}>
      <Card><Statistic label="Active users" value={12480} change="+12.4%" trend="up" comparison="vs last month" /></Card>
      <Card><Statistic label="Revenue" value={48920} prefix="$" change="+5.6%" trend="up" comparison="vs last month" /></Card>
      <Card><Statistic label="Churn" value={2.3} precision={1} suffix="%" change="-0.4%" trend="down" sentiment="positive" comparison="vs last month" /></Card>
    </div>
  );
}
