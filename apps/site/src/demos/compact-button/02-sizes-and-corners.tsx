/**
 * Sizes and corners
 * Large is 24px with a 20px icon, medium is 20px with a 16px icon. Corners are slightly rounded or fully round.
 */
import { CompactButton } from '@halo-ds/react';
import { X } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <CompactButton size="lg" aria-label="Close"><X /></CompactButton>
      <CompactButton size="md" aria-label="Close"><X /></CompactButton>
      <CompactButton size="lg" round aria-label="Close"><X /></CompactButton>
      <CompactButton size="md" round aria-label="Close"><X /></CompactButton>
    </div>
  );
}
