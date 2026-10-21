import { CompactButton, Tooltip } from '@halo-ds/react';
import { DotsThree, PencilSimple, Star, Trash } from '@phosphor-icons/react';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Tooltip content="Edit">
        <CompactButton aria-label="Edit"><PencilSimple /></CompactButton>
      </Tooltip>
      <Tooltip content="Favourite">
        <CompactButton variant="ghost" aria-label="Favourite" selected><Star /></CompactButton>
      </Tooltip>
      <Tooltip content="Delete">
        <CompactButton variant="ghost" aria-label="Delete"><Trash /></CompactButton>
      </Tooltip>
      <Tooltip content="More">
        <CompactButton variant="ghost" aria-label="More"><DotsThree /></CompactButton>
      </Tooltip>
    </div>
  );
}
