import { Checkbox } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Checkbox label="Email me about new comments" defaultChecked />
      <Checkbox label="Weekly summary" description="Every Monday morning." />
      <Checkbox label="Accept the terms" invalid />
    </div>
  );
}
