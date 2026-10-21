/**
 * Destructive
 * A red icon and button, with the buttons stacked full width.
 */
import { useState } from 'react';
import { Button, Modal } from '@halo-ds/react';

export default function Demo() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>Delete project</Button>
      <Modal
        open={open}
        onClose={close}
        type="destructive"
        layout="stacked"
        title="Delete project?"
        description="This removes all files for everyone. You can't undo it."
        actions={
          <>
            <Button variant="destructive" onClick={close}>Delete</Button>
            <Button variant="secondary" onClick={close}>Cancel</Button>
          </>
        }
      />
    </>
  );
}
