/**
 * Small
 * Small switches for view options in panels.
 */
import { Switch } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack">
      <Switch size="sm" label="Show weekends" defaultChecked />
      <Switch size="sm" label="Show week numbers" />
    </div>
  );
}
