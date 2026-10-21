/**
 * Statuses
 * Success, error, warning and information, for the outcome of an action.
 */
import { Button, Card, Result } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-grid-2">
      <Card><Result size="sm" status="success" title="Payment sent" description="We emailed you a receipt." actions={<Button size="sm">Done</Button>} /></Card>
      <Card><Result size="sm" status="error" title="Payment failed" description="Your bank declined it. Try another card." actions={<Button size="sm">Try again</Button>} /></Card>
      <Card><Result size="sm" status="warning" title="Sent with a problem" description="Two of the five invitations bounced." actions={<Button size="sm">Check emails</Button>} /></Card>
      <Card><Result size="sm" status="information" title="Request received" description="We will reply within two working days." actions={<Button size="sm">Done</Button>} /></Card>
    </div>
  );
}
