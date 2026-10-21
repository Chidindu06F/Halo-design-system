/**
 * Status
 * Default, success, error, and indeterminate when you do not know how long it takes.
 */
import { ProgressBar } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 360 }}>
      <ProgressBar value={60} label="Uploading files" hint="3 of 5 files uploaded" />
      <ProgressBar value={100} status="success" label="Uploading files" hint="Upload complete" />
      <ProgressBar value={60} status="error" label="Uploading files" hint="Upload failed. Check your connection." />
      <ProgressBar label="Preparing your export" valueLabel="" hint="This can take a minute." />
    </div>
  );
}
