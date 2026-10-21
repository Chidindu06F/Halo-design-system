/**
 * Banner
 * One row across the top of a page.
 */
import { Alert, Button } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <Alert layout="banner" type="information" title="A new version is ready" description="Reload to get the latest features." actions={<Button variant="secondary" size="sm">Reload</Button>} onClose={() => {}} />
    </div>
  );
}
