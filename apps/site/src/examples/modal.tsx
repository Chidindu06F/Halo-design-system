import { useState } from 'react';
import { Button, Modal } from '@halo-ds/react';

export default function Example() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete project</Button>
      <Modal
        open={open}
        onClose={close}
        title="Delete this project?"
        description="Its files and tasks are deleted too. This can't be undone."
        actions={
          <>
            <Button variant="secondary" onClick={close}>Cancel</Button>
            <Button variant="destructive" onClick={close}>Delete</Button>
          </>
        }
      />
    </>
  );
}
