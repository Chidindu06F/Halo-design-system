/**
 * Sizes
 * Small for dense panels, medium for most dashboards, large for one headline number.
 */
import { Statistic } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row" style={{ gap: 40, alignItems: 'flex-start' }}>
      <Statistic size="sm" label="Small" value={12480} change="+12.4%" trend="up" comparison="vs last month" />
      <Statistic size="md" label="Medium" value={12480} change="+12.4%" trend="up" comparison="vs last month" />
      <Statistic size="lg" label="Large" value={12480} change="+12.4%" trend="up" comparison="vs last month" />
    </div>
  );
}
