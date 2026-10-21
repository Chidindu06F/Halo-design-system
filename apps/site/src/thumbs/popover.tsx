import { Button, Card, Text } from '@halo-ds/react';

export default function Thumb() {
  return (
    <div style={{ display: 'grid', gap: 8, justifyItems: 'center', width: 280 }}>
      <Button variant="secondary" size="sm">Share</Button>
      <Card>
        <Text weight="semibold">Share this file</Text>
        <Text size="sm" color="secondary">Anyone with the link can view it.</Text>
      </Card>
    </div>
  );
}
