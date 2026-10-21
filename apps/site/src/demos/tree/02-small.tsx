/**
 * Small
 * Small rows, for dense side panels.
 */
import { Tree } from '@halo-ds/react';

const files = [
  { id: 'brand', label: 'Brand', children: [{ id: 'logo', label: 'Logo.svg' }, { id: 'colours', label: 'Colours.pdf' }] },
  { id: 'notes', label: 'Notes.txt' },
];

export default function Demo() {
  return (
    <div style={{ width: 260 }}>
      <Tree size="sm" nodes={files} defaultExpanded={['brand']} aria-label="Files" />
    </div>
  );
}
