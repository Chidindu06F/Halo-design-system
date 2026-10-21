/**
 * Types
 * Neutral, information, success, warning and error.
 */
import { Toast } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack">
      <Toast type="neutral" title="Message archived" onClose={() => {}} />
      <Toast type="information" title="Update available" onClose={() => {}} />
      <Toast type="success" title="Changes saved" onClose={() => {}} />
      <Toast type="warning" title="Storage almost full" onClose={() => {}} />
      <Toast type="error" title="Upload failed" onClose={() => {}} />
    </div>
  );
}
