/**
 * Sizes
 * Small, medium and large.
 */
import { Rating } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ justifyItems: 'center' }}>
      <Rating size="sm" defaultValue={4} aria-label="Small" />
      <Rating size="md" defaultValue={4} aria-label="Medium" />
      <Rating size="lg" defaultValue={4} aria-label="Large" />
    </div>
  );
}
