/**
 * Your own colour
 * Any CSS colour works, so people can pick their own tag colours.
 */
import { Tag } from '@halo-ds/react';
import { Hash } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Tag color="#0EA5A4" icon={<Hash />}>launch-week</Tag>
      <Tag color="#D97706" icon={<Hash />}>urgent</Tag>
    </div>
  );
}
