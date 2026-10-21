/**
 * Settings list
 * controlPosition="end" puts every switch on the right, lined up.
 */
import { Switch } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 360 }}>
      <Switch controlPosition="end" label="Email notifications" description="A weekly summary of activity." defaultChecked />
      <Switch controlPosition="end" label="Reduce motion" description="Turn off animations." />
      <Switch controlPosition="end" label="Sync calendar" description="Connect a calendar first." disabled />
    </div>
  );
}
