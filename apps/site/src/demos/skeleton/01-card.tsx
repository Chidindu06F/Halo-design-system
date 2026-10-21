/**
 * Card
 * An image, a title and two lines of text.
 */
import { Skeleton } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-panel" style={{ display: 'grid', gap: 12, width: 260 }}>
      <Skeleton shape="rectangle" height={140} />
      <Skeleton width={170} height={16} />
      <Skeleton />
      <Skeleton width={100} />
    </div>
  );
}
