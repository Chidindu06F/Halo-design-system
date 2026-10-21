/**
 * Sizes
 * Extra small 16, small 20, medium 24 and large 28. Extra small is for counts on icons.
 */
import { Badge } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Badge size="xs" color="brand">Extra small</Badge>
      <Badge size="sm" color="brand">Small</Badge>
      <Badge size="md" color="brand">Medium</Badge>
      <Badge size="lg" color="brand">Large</Badge>
    </div>
  );
}
