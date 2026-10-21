/**
 * Checkable
 * Checkboxes for picking several, like permissions for a role. Checking a parent checks everything inside.
 */
import { useState } from 'react';
import { Tree } from '@halo-ds/react';

const permissions = [
  { id: 'projects', label: 'Projects', children: [{ id: 'projects-view', label: 'View projects' }, { id: 'projects-edit', label: 'Edit projects' }] },
  { id: 'billing', label: 'Billing', children: [{ id: 'billing-view', label: 'View invoices' }, { id: 'billing-pay', label: 'Pay invoices' }] },
];

export default function Demo() {
  const [checked, setChecked] = useState<string[]>(['projects-view']);
  return (
    <div style={{ width: 300 }}>
      <Tree nodes={permissions} checkable checked={checked} onCheckedChange={setChecked} defaultExpanded={['projects', 'billing']} aria-label="Permissions" />
    </div>
  );
}
