/**
 * Icon only
 * Just the logo, for a row of sign-up options.
 */
import { SocialButton } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <SocialButton provider="google" variant="outline" iconOnly />
      <SocialButton provider="apple" variant="outline" iconOnly />
      <SocialButton provider="x" variant="outline" iconOnly />
      <SocialButton provider="github" variant="outline" iconOnly />
    </div>
  );
}
