import { Button, Checkbox, Text } from '@halo-ds/react';

export default function Thumb() {
  return (
    <div style={{ display: 'flex', width: 400, height: 260, borderRadius: 12, overflow: 'hidden', background: 'var(--halo-overlay-primary)' }}>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'grid', alignContent: 'start', gap: 12, width: 200, padding: 20, background: 'var(--halo-surface-primary)' }}>
        <Text size="lg" weight="semibold">Filters</Text>
        <Checkbox label="Active" defaultChecked />
        <Checkbox label="Paused" />
        <Checkbox label="Archived" />
        <Button size="sm">Show results</Button>
      </div>
    </div>
  );
}
