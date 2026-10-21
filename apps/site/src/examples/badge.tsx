import { Badge } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
      <Badge>Draft</Badge>
      <Badge color="information">In review</Badge>
      <Badge color="success" dot>Live</Badge>
      <Badge color="warning">Due soon</Badge>
      <Badge color="error">Overdue</Badge>
      <Badge color="brand" variant="solid">New</Badge>
      <Badge color="error" variant="solid" count={12} />
    </div>
  );
}
