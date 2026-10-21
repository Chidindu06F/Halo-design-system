import { Alert, Button } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 12, width: '100%', maxWidth: 520 }}>
      <Alert type="information" title="Your trial ends in 3 days" description="Pick a plan to keep your projects." actions={<Button size="sm">See plans</Button>} />
      <Alert type="success" title="Payment received" />
      <Alert type="warning" title="Two invites bounced" description="Check the email addresses and try again." />
      <Alert type="error" title="Couldn't save" description="Check your connection and try again." />
    </div>
  );
}
