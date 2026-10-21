/**
 * Card with switches
 * A bordered box in the small size, here for settings.
 */
import { List, ListItem, Switch } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: 380 }}>
      <List variant="card" size="sm">
        <ListItem title="Email updates" description="A weekly summary" trailing={<Switch aria-label="Email updates" defaultChecked />} />
        <ListItem title="Push notifications" description="Mentions and replies" trailing={<Switch aria-label="Push notifications" />} />
      </List>
    </div>
  );
}
