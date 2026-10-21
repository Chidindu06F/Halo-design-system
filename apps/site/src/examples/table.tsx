import { Badge, DataTable } from '@halo-ds/react';
import type { DataTableColumn } from '@halo-ds/react';

interface Member {
  id: number;
  name: string;
  role: string;
  status: 'Active' | 'Invited';
  projects: number;
}

const members: Member[] = [
  { id: 1, name: 'Ada Obi', role: 'Admin', status: 'Active', projects: 12 },
  { id: 2, name: 'Kofi Mensah', role: 'Editor', status: 'Active', projects: 7 },
  { id: 3, name: 'Lena Park', role: 'Editor', status: 'Invited', projects: 0 },
  { id: 4, name: 'Mateo Silva', role: 'Viewer', status: 'Active', projects: 3 },
];

const columns: DataTableColumn<Member>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'role', header: 'Role', sortable: true, filters: [{ value: 'Admin', label: 'Admin' }, { value: 'Editor', label: 'Editor' }, { value: 'Viewer', label: 'Viewer' }] },
  { key: 'status', header: 'Status', render: (m) => <Badge size="sm" color={m.status === 'Active' ? 'success' : 'neutral'}>{m.status}</Badge> },
  { key: 'projects', header: 'Projects', sortable: true, numeric: true },
];

export default function Example() {
  return (
    <div style={{ width: '100%' }}>
      <DataTable columns={columns} rows={members} getRowId={(m) => m.id} selectable pageSize={0} />
    </div>
  );
}
