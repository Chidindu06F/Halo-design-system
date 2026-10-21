/**
 * Full width
 * The options share the width, for phones and panels.
 */
import { SegmentedControl } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: 340 }}>
      <SegmentedControl
        fullWidth
        aria-label="Billing"
        defaultValue="yearly"
        options={[
          { value: 'monthly', label: 'Monthly' },
          { value: 'yearly', label: 'Yearly' },
        ]}
      />
    </div>
  );
}
