/**
 * Inverse with an action
 * A dark toast with Undo, for actions people might want to take back.
 */
import { Button, Toast } from '@halo-ds/react';
import { Archive } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <Toast
      variant="inverse"
      icon={<Archive />}
      title="Message archived"
      description="It moved to the archive."
      actions={<Button variant="secondary" size="xs">Undo</Button>}
      onClose={() => {}}
    />
  );
}
