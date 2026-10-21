/**
 * Small
 * For a card or a side panel.
 */
import { Button, EmptyState } from '@halo-ds/react';
import { MagnifyingGlass } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-panel" style={{ width: 340 }}>
      <EmptyState size="sm" icon={<MagnifyingGlass />} title="No results" description="Try a different search or clear the filters." actions={<Button size="sm" variant="secondary">Clear filters</Button>} />
    </div>
  );
}
