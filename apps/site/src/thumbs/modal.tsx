import { Button, Card, Text } from '@halo-ds/react';

export default function Thumb() {
  return (
    <div style={{ width: 320 }}>
      <Card>
        <Text size="lg" weight="semibold">Delete this project?</Text>
        <Text color="secondary">Its files and tasks are deleted too.</Text>
        <div style={{ display: 'flex', gap: 8, alignSelf: 'stretch', justifyContent: 'flex-end' }}>
          <Button size="sm" variant="secondary">Cancel</Button>
          <Button size="sm" variant="destructive">Delete</Button>
        </div>
      </Card>
    </div>
  );
}
