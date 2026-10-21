import { LinkButton } from '@halo-ds/react';
import { ArrowRight, Trash } from '@phosphor-icons/react';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <LinkButton href="#" iconRight={<ArrowRight />}>View all invoices</LinkButton>
      <LinkButton variant="destructive" iconLeft={<Trash />}>Remove</LinkButton>
    </div>
  );
}
