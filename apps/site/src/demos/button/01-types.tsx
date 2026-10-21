/**
 * Types
 * Primary for the main action, Secondary for the alternative, Ghost for quiet actions and Destructive for deleting.
 */
import { Button } from '@halo-ds/react';
import { ArrowRight, Trash } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Button>Save changes</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost" iconRight={<ArrowRight />}>Learn more</Button>
      <Button variant="destructive" iconLeft={<Trash />}>Delete</Button>
    </div>
  );
}
