/**
 * Filters and expandable rows
 * Filters in the column headers, and rows that open to show more details.
 */
import { DataTable } from '@halo-ds/react';
import type { DataTableColumn } from '@halo-ds/react';

const members = [
  { id: 1, name: 'Ada Obi', email: 'ada@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Kofi Mensah', email: 'kofi@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Lena Park', email: 'lena@example.com', role: 'Editor', status: 'Invited' },
  { id: 4, name: 'Mateo Silva', email: 'mateo@example.com', role: 'Viewer', status: 'Active' },
  { id: 5, name: 'Sade Bello', email: 'sade@example.com', role: 'Viewer', status: 'Active' },
  { id: 6, name: 'Yuki Tanaka', email: 'yuki@example.com', role: 'Editor', status: 'Invited' },
];

type Member = (typeof members)[number];

const columns: DataTableColumn<Member>[] = [
  { key: 'name', header: 'Name' },
  { key: 'role', header: 'Role', filters: [{ value: 'Admin', label: 'Admin' }, { value: 'Editor', label: 'Editor' }, { value: 'Viewer', label: 'Viewer' }] },
  { key: 'status', header: 'Status', filters: [{ value: 'Active', label: 'Active' }, { value: 'Invited', label: 'Invited' }] },
];

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <DataTable
        columns={columns}
        rows={members}
        getRowId={(m) => m.id}
        pageSize={0}
        expandable={{ render: (m) => <span>{m.email}</span> }}
      />
    </div>
  );
}
