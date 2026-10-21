/**
 * Colours
 * The preset colours. Neutral is the default.
 */
import { Tag } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      {(['neutral', 'blue', 'green', 'orange', 'purple', 'red'] as const).map((c) => (
        <Tag key={c} color={c}>{c[0]!.toUpperCase() + c.slice(1)}</Tag>
      ))}
    </div>
  );
}
