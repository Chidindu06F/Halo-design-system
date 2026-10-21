/**
 * Compact
 * A title and a segmented bar. Horizontal steppers switch to this by themselves under 600px.
 */
import { Stepper } from '@halo-ds/react';

const steps = [
  { title: 'Account', description: 'Name and email' },
  { title: 'Profile', description: 'Photo and bio' },
  { title: 'Billing', description: 'Plan and card' },
  { title: 'Review', description: 'Check and confirm' },
];

export default function Demo() {
  return (
    <div style={{ width: 340 }}>
      <Stepper steps={steps} current={1} orientation="compact" />
    </div>
  );
}
