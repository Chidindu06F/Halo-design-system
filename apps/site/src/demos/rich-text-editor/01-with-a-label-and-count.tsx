/**
 * With a label and count
 * A label, a hint and a character limit, like other fields.
 */
import { RichTextEditorField } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: '100%', maxWidth: 560 }}>
      <RichTextEditorField label="Description" hint="Shown on the project page." maxLength={500} placeholder="Describe the project" />
    </div>
  );
}
