import { CompactButton, Menu } from '@halo-ds/react';
import { Copy, DotsThree, PencilSimple, Trash } from '@phosphor-icons/react';

export default function Example() {
  return (
    <Menu
      aria-label="File actions"
      trigger={
        <CompactButton aria-label="More actions">
          <DotsThree />
        </CompactButton>
      }
      items={[
        { label: 'Rename', icon: <PencilSimple /> },
        { label: 'Duplicate', icon: <Copy /> },
        { type: 'separator' },
        { label: 'Delete', icon: <Trash />, destructive: true },
      ]}
    />
  );
}
