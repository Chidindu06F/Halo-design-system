/**
 * States
 * Required, optional with an info tip, valid, an error and disabled.
 */
import { InputField } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 320 }}>
      <InputField label="Full name" required defaultValue="Amara Okafor" />
      <InputField label="Company" optional info="Shown on your invoices." placeholder="Studio" />
      <InputField label="Username" valid defaultValue="amara.okafor" />
      <InputField label="Password" error="Use at least 8 characters." defaultValue="abc" />
      <InputField label="Email" disabled defaultValue="amara@example.com" />
    </div>
  );
}
