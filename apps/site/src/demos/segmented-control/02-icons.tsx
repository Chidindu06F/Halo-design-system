/**
 * Icons
 * Icon-only options need an aria-label each.
 */
import { SegmentedControl } from '@halo-ds/react';
import { List, SquaresFour } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <SegmentedControl
      aria-label="Layout"
      defaultValue="list"
      options={[
        { value: 'list', icon: <List />, 'aria-label': 'List view' },
        { value: 'grid', icon: <SquaresFour />, 'aria-label': 'Grid view' },
      ]}
    />
  );
}
