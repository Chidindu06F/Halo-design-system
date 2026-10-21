/**
 * With actions
 * Buttons at the bottom right for a quick decision.
 */
import { Button, Popover } from '@halo-ds/react';

export default function Demo() {
  return (
    <Popover
      trigger={<Button variant="secondary">Archive</Button>}
      title="Archive this project?"
      description="You can bring it back from the archive at any time."
      actions={
        <>
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button size="sm">Archive</Button>
        </>
      }
    />
  );
}
