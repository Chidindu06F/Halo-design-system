import { Button, ButtonGroup } from '@halo-ds/react';

export default function Example() {
  return (
    <ButtonGroup aria-label="Range">
      <Button variant="secondary">Day</Button>
      <Button variant="secondary">Week</Button>
      <Button variant="secondary">Month</Button>
    </ButtonGroup>
  );
}
