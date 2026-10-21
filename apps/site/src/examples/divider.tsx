import { Divider, Text } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 16, width: 360 }}>
      <Text>Sign in with your email</Text>
      <Divider label="or" />
      <Text>Continue with Google</Text>
    </div>
  );
}
