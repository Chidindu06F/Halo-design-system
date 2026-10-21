/**
 * Plain
 * No arrow and no close button, just content.
 */
import { Button, Popover } from '@halo-ds/react';

export default function Demo() {
  return (
    <Popover trigger={<Button variant="secondary">Details</Button>} arrow={false} showClose={false}>
      Last edited 2 hours ago by the design team.
    </Popover>
  );
}
