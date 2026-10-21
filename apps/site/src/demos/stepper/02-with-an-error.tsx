/**
 * With an error
 * A step that needs fixing turns red with a message.
 */
import { Stepper } from '@halo-ds/react';

const steps = [
  { title: 'Account', description: 'Name and email' },
  { title: 'Profile', description: 'Add a photo', error: true },
  { title: 'Billing', description: 'Plan and card' },
  { title: 'Review', description: 'Check and confirm' },
];

export default function Demo() {
  return (
    <div style={{ width: '100%', maxWidth: 640 }}>
      <Stepper steps={steps} current={2} />
    </div>
  );
}
