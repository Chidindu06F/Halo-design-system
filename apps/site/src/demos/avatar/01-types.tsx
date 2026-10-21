/**
 * Types
 * A photo, initials, or an icon when there is neither.
 */
import { Avatar } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Avatar size="xl" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" name="Tobi Adeyemi" />
      <Avatar size="xl" name="Ada Okafor" color="purple" />
      <Avatar size="xl" color="blue" />
    </div>
  );
}
