/**
 * Counts
 * Single digits are circles. Bigger numbers grow into a pill and stop at max.
 */
import { Badge } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Badge size="xs" color="error" variant="solid" count={3} aria-label="3 unread" />
      <Badge color="error" variant="solid" count={12} aria-label="12 unread" />
      <Badge size="lg" color="error" variant="solid" count={150} aria-label="150 unread" />
      <Badge count={1200} max={999} />
    </div>
  );
}
