import { Stepper } from '@halo-ds/react';

const steps = [
  { title: 'Account', description: 'Name and email' },
  { title: 'Profile', description: 'Photo and bio' },
  { title: 'Billing', description: 'Plan and card' },
  { title: 'Review', description: 'Check and confirm' },
];

export default function Example() {
  return (
    <div style={{ width: '100%', maxWidth: 640 }}>
      <Stepper steps={steps} current={1} />
    </div>
  );
}
