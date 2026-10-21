import { Avatar, Card, Text } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ width: 300 }}>
      <Card media={<div style={{ aspectRatio: '16 / 9', background: 'linear-gradient(135deg, #f3c8f4, #c9daff)' }} />} href="#">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <Text weight="semibold">Brand refresh</Text>
            <Text size="sm" color="secondary">Edited 5 minutes ago</Text>
          </div>
          <Avatar size="sm" name="Ada Obi" />
        </div>
      </Card>
    </div>
  );
}
