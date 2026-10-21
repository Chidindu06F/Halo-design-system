/**
 * Sticky header and first column
 * The header stays while rows scroll, and the names stay while the table scrolls sideways.
 */
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@halo-ds/react';

const members = [
  { id: 1, name: 'Ada Obi', email: 'ada@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Kofi Mensah', email: 'kofi@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Lena Park', email: 'lena@example.com', role: 'Editor', status: 'Invited' },
  { id: 4, name: 'Mateo Silva', email: 'mateo@example.com', role: 'Viewer', status: 'Active' },
  { id: 5, name: 'Sade Bello', email: 'sade@example.com', role: 'Viewer', status: 'Active' },
  { id: 6, name: 'Yuki Tanaka', email: 'yuki@example.com', role: 'Editor', status: 'Invited' },
];

export default function Demo() {
  return (
    <div style={{ width: '100%', maxWidth: 520 }}>
      <Table stickyHeader stickyFirstColumn maxHeight={220} style={{ minWidth: 720 }}>
        <TableHead>
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </tr>
        </TableHead>
        <TableBody>
          {members.map((m) => (
            <TableRow key={m.id}>
              <TableCell style={{ whiteSpace: 'nowrap' }}>{m.name}</TableCell>
              <TableCell>{m.email}</TableCell>
              <TableCell>{m.role}</TableCell>
              <TableCell>{m.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
