/**
 * Swatches
 * Square or round, two sizes, and a selected state.
 */
import { ColorSwatch } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <ColorSwatch color="#CC1DD0" aria-label="Purple" selected />
      <ColorSwatch color="#3D7BF7" aria-label="Blue" />
      <ColorSwatch color="#1FA971" aria-label="Green" shape="circle" />
      <ColorSwatch color="#E5484D80" aria-label="Red at half opacity" size="sm" />
    </div>
  );
}
