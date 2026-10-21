/**
 * Vertical
 * Down the side of a long form.
 */
import { Stepper } from '@halo-ds/react';

const steps = [
  { title: 'Account', description: 'Name and email' },
  { title: 'Profile', description: 'Photo and bio' },
  { title: 'Billing', description: 'Plan and card' },
];

export default function Demo() {
  return (
    <div style={{ width: 280 }}>
      <Stepper steps={steps} current={1} orientation="vertical" />
    </div>
  );
}
