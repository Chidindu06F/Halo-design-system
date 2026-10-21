/**
 * Horizontal
 * Two or three short options in a row.
 */
import { Radio, RadioGroup } from '@halo-ds/react';

export default function Demo() {
  return (
    <RadioGroup label="Billing" orientation="horizontal" defaultValue="yearly" hint="Save 20% with yearly billing.">
      <Radio value="monthly" label="Monthly" />
      <Radio value="yearly" label="Yearly" />
    </RadioGroup>
  );
}
