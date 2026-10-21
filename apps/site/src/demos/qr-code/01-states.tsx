/**
 * States
 * Loading while a code is made, and Scanned once a phone has read it.
 */
import { QRCode } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row" style={{ gap: 24 }}>
      <QRCode value="https://example.com/invite/7Q2K9" label="Scan to open the invite" status="loading" size={140} />
      <QRCode value="https://example.com/invite/7Q2K9" label="Scan to open the invite" status="scanned" size={140} />
    </div>
  );
}
