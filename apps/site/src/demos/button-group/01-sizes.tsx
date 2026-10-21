/**
 * Sizes
 * Every button in the group takes the group size.
 */
import { Button, ButtonGroup } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <ButtonGroup key={size} size={size} aria-label="Range">
          <Button>Day</Button>
          <Button>Week</Button>
          <Button>Month</Button>
        </ButtonGroup>
      ))}
    </div>
  );
}
