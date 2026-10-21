/**
 * Disabled and error
 * Pair an error with a message that says what to do.
 */
import { Checkbox } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack">
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled and ticked" disabled defaultChecked />
      <Checkbox label="I agree to the terms" invalid description="Tick this box to continue." />
    </div>
  );
}
