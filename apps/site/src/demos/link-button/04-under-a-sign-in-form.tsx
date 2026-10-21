/**
 * Under a sign-in form
 * A small link button for the quieter action, next to the main button.
 */
import { Button, InputField, LinkButton } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-panel" style={{ display: 'grid', gap: 16, width: 320 }}>
      <InputField label="Email" defaultValue="ada@example.com" />
      <InputField label="Password" type="password" defaultValue="password" />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <LinkButton href="#" size="sm">Forgot password?</LinkButton>
      </div>
      <Button>Sign in</Button>
    </div>
  );
}
