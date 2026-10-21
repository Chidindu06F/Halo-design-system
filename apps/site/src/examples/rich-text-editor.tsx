import { RichTextEditor } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ width: '100%', maxWidth: 560 }}>
      <RichTextEditor aria-label="Release notes" defaultValue="<p>This update makes <strong>sharing</strong> faster.</p>" />
    </div>
  );
}
