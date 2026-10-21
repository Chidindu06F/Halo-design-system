/**
 * Dots without a spotlight
 * Progress dots instead of a count, and no dimmed page around the target.
 */
import { useState } from 'react';
import { Button, Tour } from '@halo-ds/react';

export default function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="demo-stack" style={{ justifyItems: 'center' }}>
      <Button id="tour-share" variant="secondary">Share</Button>
      <Button onClick={() => setOpen(true)}>Show me</Button>
      <Tour
        open={open}
        onOpenChange={setOpen}
        progress="dots"
        spotlight={false}
        steps={[
          { target: '#tour-share', title: 'Share your work', description: 'Invite people or copy a link.' },
          { title: 'That is it', description: 'You can start the tour again from Help.' },
        ]}
      />
    </div>
  );
}
