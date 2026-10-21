import { Skeleton } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', width: 360 }}>
      <Skeleton shape="circle" width={48} height={48} />
      <div style={{ display: 'grid', gap: 8, flex: 1 }}>
        <Skeleton width="60%" />
        <Skeleton width="90%" />
      </div>
    </div>
  );
}
