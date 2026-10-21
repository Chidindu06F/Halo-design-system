import { LoadingIndicator, Spinner } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 24, justifyItems: 'center' }}>
      <Spinner />
      <LoadingIndicator>Loading your projects</LoadingIndicator>
    </div>
  );
}
