/**
 * Premium
 * A gradient for upgrades and paid features. Use at most one per screen, and never next to a Primary button.
 */
import { Button } from '@halo-ds/react';
import { Sparkle } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Button variant="premium" size="lg" iconLeft={<Sparkle weight="fill" />}>Upgrade to Pro</Button>
      <Button variant="premium" size="sm">Upgrade</Button>
    </div>
  );
}
