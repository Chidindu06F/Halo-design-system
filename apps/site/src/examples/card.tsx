import { Avatar, Card, Text } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ width: 300 }}>
      <Card media={<img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80" alt="" />} href="#">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, alignSelf: 'stretch' }}>
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
