/**
 * Colours
 * Primary for main text, contrast for descriptions, secondary for captions.
 */
import { Text } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ maxWidth: 420 }}>
      <Text color="primary">Primary: the main text.</Text>
      <Text color="contrast">Contrast: descriptions under a title.</Text>
      <Text color="secondary">Secondary: dates and other metadata.</Text>
    </div>
  );
}
