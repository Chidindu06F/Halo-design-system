import { Button, Tooltip } from '@halo-ds/react';

export default function Example() {
  return (
    <Tooltip content="Copies the link to your clipboard">
      <Button variant="secondary">Copy link</Button>
    </Tooltip>
  );
}
