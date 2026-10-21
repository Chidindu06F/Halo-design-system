import { Switch } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 16, width: 320 }}>
      <Switch label="Dark mode" defaultChecked />
      <Switch label="Auto-save" description="Saves every change as you type." />
    </div>
  );
}
