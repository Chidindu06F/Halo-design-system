/**
 * Types and sizes
 * Primary and Destructive, in medium (14px) and small (12px).
 */
import { LinkButton } from '@halo-ds/react';
import { ArrowRight } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <LinkButton href="#" iconRight={<ArrowRight />}>View all</LinkButton>
      <LinkButton href="#" size="sm" iconRight={<ArrowRight />}>View all</LinkButton>
      <LinkButton variant="destructive">Remove</LinkButton>
      <LinkButton variant="destructive" size="sm">Remove</LinkButton>
    </div>
  );
}
