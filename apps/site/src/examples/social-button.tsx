import { SocialButton } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 12, width: 320 }}>
      <SocialButton provider="google" variant="outline" fullWidth />
      <SocialButton provider="apple" fullWidth />
      <SocialButton provider="github" variant="outline" fullWidth />
    </div>
  );
}
