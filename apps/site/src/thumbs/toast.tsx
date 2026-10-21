import { Toast } from '@halo-ds/react';

export default function Thumb() {
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <Toast type="success" title="Changes saved" onClose={() => {}} />
      <Toast type="error" title="Upload failed" description="The file is over 10 MB." onClose={() => {}} />
    </div>
  );
}
