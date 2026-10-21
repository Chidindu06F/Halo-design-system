/**
 * Sizes
 * Extra small, small, medium and large: 28, 32, 40 and 48px tall. Medium is the default.
 */
import { Button } from '@halo-ds/react';
import { Plus } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="lg" iconOnly aria-label="Add"><Plus /></Button>
    </div>
  );
}
