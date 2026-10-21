import { useState } from 'react';
import { Button, Checkbox, Drawer } from '@halo-ds/react';

export default function Example() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Filters</Button>
      <Drawer
        open={open}
        onClose={close}
        title="Filters"
        description="Narrow down the list."
        actions={
          <>
            <Button variant="secondary" onClick={close}>Reset</Button>
            <Button onClick={close}>Show results</Button>
          </>
        }
      >
        <div style={{ display: 'grid', gap: 12 }}>
          <Checkbox label="Active" defaultChecked />
          <Checkbox label="Paused" />
          <Checkbox label="Archived" />
        </div>
      </Drawer>
    </>
  );
}
