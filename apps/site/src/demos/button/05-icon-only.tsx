/**
 * Icon only
 * Round buttons for compact actions. They always need an aria-label, since there is no visible text.
 */
import { Button } from '@halo-ds/react';
import { Gear, Heart, X } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Button iconOnly aria-label="Settings"><Gear /></Button>
      <Button variant="secondary" iconOnly aria-label="Like"><Heart /></Button>
      <Button variant="ghost" iconOnly aria-label="Close"><X /></Button>
    </div>
  );
}
