import { Button, InputField, Popover } from '@halo-ds/react';

export default function Example() {
  return (
    <Popover
      trigger={<Button variant="secondary">Share</Button>}
      title="Share this file"
      description="Anyone with the link can view it."
      showClose
    >
      <InputField label="Invite by email" placeholder="name@company.com" />
    </Popover>
  );
}
