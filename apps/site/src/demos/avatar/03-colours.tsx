/**
 * Colours
 * Five background colours. Use them to tell people apart, not to mean anything.
 */
import { Avatar } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      {(['neutral', 'purple', 'blue', 'green', 'orange'] as const).map((c) => (
        <Avatar key={c} size="lg" color={c} initials="AO" name={c} />
      ))}
    </div>
  );
}
