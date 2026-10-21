/**
 * Dot and icon
 * A dot for statuses, or an icon for labels like Pro.
 */
import { Badge } from '@halo-ds/react';
import { CheckCircle, Lightning } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Badge color="success" dot>Active</Badge>
      <Badge color="warning" dot>Pending</Badge>
      <Badge color="error" dot>Failed</Badge>
      <Badge color="brand" variant="outline" icon={<Lightning />}>Pro</Badge>
      <Badge color="success" variant="outline" icon={<CheckCircle />}>Verified</Badge>
    </div>
  );
}
