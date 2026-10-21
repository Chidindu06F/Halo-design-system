/**
 * Sizes and weights
 * Large for reading, medium for most text, small for captions. Semibold for short emphasis.
 */
import { Text } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ maxWidth: 420 }}>
      <Text size="lg">Large: for longer reading.</Text>
      <Text size="md">Medium: most interface text.</Text>
      <Text size="sm">Small: captions and metadata.</Text>
      <Text weight="semibold">Semibold: a name or a short label.</Text>
    </div>
  );
}
