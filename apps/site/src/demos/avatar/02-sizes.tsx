/**
 * Sizes
 * Extra small 24, small 32, medium 40, large 48 and extra large 64.
 */
import { Avatar } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Avatar key={s} size={s} name="Ada Okafor" color="purple" />
      ))}
    </div>
  );
}
