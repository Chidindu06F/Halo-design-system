/**
 * Sizes
 * Five sizes, from inside a small button to a whole page.
 */
import { Spinner } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => <Spinner key={s} size={s} />)}
    </div>
  );
}
