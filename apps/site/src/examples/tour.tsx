import { useState } from 'react';
import { Button, Input, Tour } from '@halo-ds/react';
import { MagnifyingGlass, Plus } from '@phosphor-icons/react';

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
      <div style={{ display: 'flex', gap: 12 }}>
        <Input id="tour-search" aria-label="Search" placeholder="Search" iconLeft={<MagnifyingGlass />} />
        <Button id="tour-new" iconLeft={<Plus />}>New</Button>
      </div>
      <Button variant="secondary" onClick={() => setOpen(true)}>Start the tour</Button>
      <Tour
        open={open}
        onOpenChange={setOpen}
        steps={[
          { title: 'Welcome', description: 'Here is a quick look around.' },
          { target: '#tour-search', title: 'Find anything', description: 'Search projects, people and files.' },
          { target: '#tour-new', title: 'Start something new', description: 'Create a project in one click.' },
        ]}
      />
    </div>
  );
}
