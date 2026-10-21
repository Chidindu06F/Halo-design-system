/**
 * Colours and styles
 * Six colours in three styles. Pick the colour for its meaning, not for decoration.
 */
import { Badge } from '@halo-ds/react';

const colors = ['neutral', 'brand', 'information', 'success', 'warning', 'error'] as const;

export default function Demo() {
  return (
    <div className="demo-stack">
      {(['soft', 'solid', 'outline'] as const).map((variant) => (
        <div key={variant} className="demo-row">
          {colors.map((c) => (
            <Badge key={c} color={c} variant={variant}>{c[0]!.toUpperCase() + c.slice(1)}</Badge>
          ))}
        </div>
      ))}
    </div>
  );
}
