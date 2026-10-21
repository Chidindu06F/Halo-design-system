/**
 * Disabled item
 * A disabled item keeps its borders, so the group still reads as one control.
 */
import { Button, ButtonGroup } from '@halo-ds/react';

export default function Demo() {
  return (
    <ButtonGroup aria-label="Edit">
      <Button>Undo</Button>
      <Button disabled>Redo</Button>
      <Button>Clear</Button>
    </ButtonGroup>
  );
}
