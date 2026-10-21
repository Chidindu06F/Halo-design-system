/**
 * Circle
 * A ring for small or square spaces, in three sizes.
 */
import { ProgressCircle } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <ProgressCircle value={25} size="sm" aria-label="Profile complete" />
      <ProgressCircle value={50} size="md" aria-label="Profile complete" />
      <ProgressCircle value={75} size="lg" aria-label="Profile complete" />
    </div>
  );
}
