/**
 * With a selection
 * A chosen option shows a check mark, like a sort order. Labels and separators group the items.
 */
import { Button, Menu } from '@halo-ds/react';

export default function Demo() {
  return (
    <Menu
      aria-label="Sort by"
      trigger={<Button variant="secondary">Sort</Button>}
      items={[
        { type: 'label', label: 'Sort by' },
        { label: 'Newest first', selected: true },
        { label: 'Oldest first' },
        { label: 'Name' },
        { type: 'separator' },
        { label: 'Size', disabled: true },
      ]}
    />
  );
}
