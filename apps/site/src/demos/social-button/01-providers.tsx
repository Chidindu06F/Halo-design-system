/**
 * Providers
 * Apple, Google, X, LinkedIn, Dropbox and GitHub, each with its own logo and label.
 */
import { SocialButton } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <SocialButton provider="apple" />
      <SocialButton provider="google" />
      <SocialButton provider="x" />
      <SocialButton provider="linkedin" />
      <SocialButton provider="dropbox" />
      <SocialButton provider="github" />
    </div>
  );
}
