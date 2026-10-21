/**
 * Styles
 * Subtle and strong, solid and dashed, and a label at the start.
 */
import { Divider } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 360, gap: 20 }}>
      <Divider />
      <Divider color="strong" />
      <Divider variant="dashed" />
      <Divider label="Section" labelPosition="start" />
    </div>
  );
}
