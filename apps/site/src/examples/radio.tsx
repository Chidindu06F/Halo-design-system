import { Radio, RadioGroup } from '@halo-ds/react';

export default function Example() {
  return (
    <RadioGroup label="Plan" defaultValue="team">
      <Radio value="free" label="Free" description="For trying things out." />
      <Radio value="team" label="Team" description="$8 per member a month." />
      <Radio value="business" label="Business" description="$16 per member a month." />
    </RadioGroup>
  );
}
