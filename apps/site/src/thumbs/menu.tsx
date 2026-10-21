import { CompactButton, List, ListItem } from '@halo-ds/react';
import { Copy, DotsThree, PencilSimple, Trash } from '@phosphor-icons/react';

export default function Thumb() {
  return (
    <div style={{ display: 'grid', gap: 8, justifyItems: 'end', width: 220 }}>
      <CompactButton variant="stroke" aria-label="More"><DotsThree /></CompactButton>
      <div style={{ width: '100%' }}>
        <List variant="card" size="sm">
          <ListItem icon={<PencilSimple />} title="Rename" />
          <ListItem icon={<Copy />} title="Duplicate" />
          <ListItem icon={<Trash />} title="Delete" />
        </List>
      </div>
    </div>
  );
}
