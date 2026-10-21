/**
 * Stat tile
 * A label, a big number and a change, for dashboards.
 */
import { Skeleton } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-panel" style={{ display: 'grid', gap: 10, width: 220 }}>
      <Skeleton width={100} />
      <Skeleton width={120} height={28} />
      <Skeleton width={80} />
    </div>
  );
}
