/**
 * Small
 * For tight spaces like a card or a form.
 */
import { Alert, Button } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <Alert size="sm" type="warning" title="Connection lost" description="Changes save when you are back online." actions={<Button variant="secondary" size="xs">Reload</Button>} />
    </div>
  );
}
