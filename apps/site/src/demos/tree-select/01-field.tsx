/**
 * Field
 * With a label and a hint, and the error state.
 */
import { TreeSelectField } from '@halo-ds/react';

const teams = [
  { id: 'product', label: 'Product', children: [{ id: 'design', label: 'Design' }, { id: 'research', label: 'Research' }] },
  { id: 'operations', label: 'Operations', children: [{ id: 'finance', label: 'Finance' }, { id: 'people', label: 'People' }] },
];

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 320 }}>
      <TreeSelectField label="Team" hint="Where this person works." nodes={teams} placeholder="Choose a team" search />
      <TreeSelectField label="Team" error="Choose a team." nodes={teams} placeholder="Choose a team" />
    </div>
  );
}
