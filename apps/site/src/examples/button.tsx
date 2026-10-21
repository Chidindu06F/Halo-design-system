import { Button } from '@halo-ds/react';
import { ArrowRight, Plus, Sparkle } from '@phosphor-icons/react';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
      <Button iconLeft={<Plus />}>New project</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost" iconRight={<ArrowRight />}>Learn more</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="premium" iconLeft={<Sparkle weight="fill" />}>Upgrade to Pro</Button>
    </div>
  );
}
