/**
 * In buttons
 * onBrand on a primary button, neutral for quieter places.
 */
import { Button, Spinner } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Button iconLeft={<Spinner size="sm" color="onBrand" label="" />}>Saving</Button>
      <Button variant="secondary" iconLeft={<Spinner size="sm" color="neutral" label="" />}>Loading</Button>
    </div>
  );
}
