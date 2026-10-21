/**
 * Disabled
 * Disabled links turn grey and can not be followed.
 */
import { LinkButton } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <LinkButton href="#" disabled>View invoice</LinkButton>
      <LinkButton variant="destructive" disabled>Remove</LinkButton>
    </div>
  );
}
