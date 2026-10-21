/**
 * Styles
 * Stroke has a border, Ghost has none until you point at it, and Fill sits on a grey background.
 */
import { CompactButton } from '@halo-ds/react';
import { X } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <CompactButton variant="stroke" aria-label="Close"><X /></CompactButton>
      <CompactButton variant="ghost" aria-label="Close"><X /></CompactButton>
      <CompactButton variant="fill" aria-label="Close"><X /></CompactButton>
    </div>
  );
}
