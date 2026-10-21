import { Pagination } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 24, justifyItems: 'center' }}>
      <Pagination pageCount={12} defaultPage={4} />
      <Pagination pageCount={12} defaultPage={4} variant="compact" />
    </div>
  );
}
