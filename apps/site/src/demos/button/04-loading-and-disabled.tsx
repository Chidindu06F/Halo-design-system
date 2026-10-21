/**
 * Loading and disabled
 * Loading shows a spinner, keeps the width and ignores clicks. Press Save to try it.
 */
import { useState } from 'react';
import { Button } from '@halo-ds/react';

export default function Demo() {
  const [busy, setBusy] = useState(false);
  const save = () => {
    setBusy(true);
    setTimeout(() => setBusy(false), 1500);
  };
  return (
    <div className="demo-row">
      <Button loading={busy} onClick={save}>Save</Button>
      <Button variant="secondary" disabled>Disabled</Button>
    </div>
  );
}
