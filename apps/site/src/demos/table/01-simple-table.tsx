/**
 * Simple table
 * Built by hand from the table parts, in the small size.
 */
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@halo-ds/react';

const rows = [
  ['January', 12840, 312],
  ['February', 14210, 355],
  ['March', 16975, 401],
] as const;

export default function Demo() {
  return (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <Table size="sm" caption="Monthly usage">
        <TableHead>
          <tr>
            <TableHeaderCell>Month</TableHeaderCell>
            <TableHeaderCell align="right">Visits</TableHeaderCell>
            <TableHeaderCell align="right">Sign ups</TableHeaderCell>
          </tr>
        </TableHead>
        <TableBody>
          {rows.map(([month, visits, signUps]) => (
            <TableRow key={month}>
              <TableCell>{month}</TableCell>
              <TableCell numeric>{visits.toLocaleString()}</TableCell>
              <TableCell numeric>{signUps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
