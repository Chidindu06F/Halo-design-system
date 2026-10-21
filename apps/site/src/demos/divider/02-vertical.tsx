/**
 * Vertical
 * A line between items in a row.
 */
import { Divider } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row" style={{ height: 24 }}>
      Edit <Divider orientation="vertical" /> Share <Divider orientation="vertical" /> Delete
    </div>
  );
}
