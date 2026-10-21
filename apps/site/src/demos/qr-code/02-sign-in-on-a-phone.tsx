/**
 * Sign in on a phone
 * The code, what it does, and a fallback for people who can not scan.
 */
import { QRCode, Text } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-panel" style={{ display: 'flex', gap: 24, alignItems: 'center', maxWidth: 520 }}>
      <QRCode value="https://example.com/login/device?code=WDJB-MJHT" label="Scan to sign in on your phone" size={144} />
      <div style={{ display: 'grid', gap: 8 }}>
        <Text size="lg" weight="semibold">Sign in on your phone</Text>
        <Text color="secondary">Point your camera at the code. Or go to example.com/device and enter WDJB-MJHT.</Text>
      </div>
    </div>
  );
}
