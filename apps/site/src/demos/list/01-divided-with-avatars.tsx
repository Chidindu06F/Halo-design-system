/**
 * Divided with avatars
 * Lines between rows, a person on the left and a status on the right.
 */
import { Avatar, Badge, List, ListItem } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: 380 }}>
      <List variant="divided">
        <ListItem title="Ada Obi" description="ada@example.com" leading={<Avatar size="sm" name="Ada Obi" color="purple" />} trailing={<Badge color="success">Active</Badge>} />
        <ListItem title="Kofi Mensah" description="kofi@example.com" leading={<Avatar size="sm" name="Kofi Mensah" />} trailing={<Badge>Invited</Badge>} />
        <ListItem title="Lena Park" description="lena@example.com" leading={<Avatar size="sm" name="Lena Park" color="blue" />} trailing={<Badge color="success">Active</Badge>} />
      </List>
    </div>
  );
}
