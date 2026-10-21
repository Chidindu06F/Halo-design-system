import { ProgressBar, ProgressCircle } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 24, width: 320, justifyItems: 'start' }}>
      <ProgressBar label="Uploading" value={64} style={{ width: '100%' }} />
      <ProgressBar label="Storage" value={92} status="error" hint="Almost full." style={{ width: '100%' }} />
      <ProgressCircle value={72} />
    </div>
  );
}
