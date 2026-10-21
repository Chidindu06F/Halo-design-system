/**
 * Error pages
 * Illustrations for pages that can not show: not found, no access, server error, offline and maintenance.
 */
import { Button, Card, Result } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-grid-2">
      <Card><Result size="sm" status="not-found" title="Page not found" description="The link may be old, or the page has moved." actions={<Button size="sm" variant="secondary">Go home</Button>} /></Card>
      <Card><Result size="sm" status="no-access" title="You don't have access" description="Ask a workspace admin to invite you." actions={<Button size="sm" variant="secondary">Go home</Button>} /></Card>
      <Card><Result size="sm" status="offline" title="You're offline" description="Check your connection." actions={<Button size="sm" variant="secondary">Try again</Button>} /></Card>
      <Card><Result size="sm" status="maintenance" title="Back soon" description="We are making updates." actions={<Button size="sm" variant="secondary">Go home</Button>} /></Card>
    </div>
  );
}
