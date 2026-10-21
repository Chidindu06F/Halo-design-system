import { Text } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 8, maxWidth: 420 }}>
      <Text size="lg" weight="semibold">Quarterly report</Text>
      <Text>Revenue grew in every region this quarter, led by online sales.</Text>
      <Text size="sm" color="secondary">Updated 2 hours ago</Text>
    </div>
  );
}
