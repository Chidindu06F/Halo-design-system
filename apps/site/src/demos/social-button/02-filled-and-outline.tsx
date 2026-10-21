/**
 * Filled and outline
 * Filled uses the brand colours of each provider. Outline is quieter, for lists of options.
 */
import { SocialButton } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <SocialButton provider="google" variant="filled" />
      <SocialButton provider="google" variant="outline" />
    </div>
  );
}
