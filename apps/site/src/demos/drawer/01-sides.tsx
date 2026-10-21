/**
 * Sides
 * From the right (the default), from the left, or as a bottom sheet with a grip.
 */
import { useState } from 'react';
import { Button, Drawer } from '@halo-ds/react';

export default function Demo() {
  const [side, setSide] = useState<'left' | 'right' | 'bottom' | null>(null);
  const close = () => setSide(null);
  return (
    <div className="demo-row">
      <Button variant="secondary" onClick={() => setSide('left')}>Left</Button>
      <Button variant="secondary" onClick={() => setSide('right')}>Right</Button>
      <Button variant="secondary" onClick={() => setSide('bottom')}>Bottom</Button>
      <Drawer
        open={side !== null}
        onClose={close}
        side={side ?? 'right'}
        size="sm"
        title="Filters"
        description="Narrow down the list."
        actions={<Button onClick={close}>Apply</Button>}
      />
    </div>
  );
}
