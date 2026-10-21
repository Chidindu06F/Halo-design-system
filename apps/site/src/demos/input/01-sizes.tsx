/**
 * Sizes
 * Small, medium and large.
 */
import { Input } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 300 }}>
      <Input size="sm" placeholder="Small" aria-label="Small" />
      <Input size="md" placeholder="Medium" aria-label="Medium" />
      <Input size="lg" placeholder="Large" aria-label="Large" />
    </div>
  );
}
