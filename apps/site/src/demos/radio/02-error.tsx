/**
 * Error
 * Every circle turns red and the hint shows as an error.
 */
import { Radio, RadioGroup } from '@halo-ds/react';

export default function Demo() {
  return (
    <RadioGroup label="Contact method" required error="Choose how we should contact you.">
      <Radio value="email" label="Email" />
      <Radio value="phone" label="Phone call" />
    </RadioGroup>
  );
}
