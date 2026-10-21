/**
 * Basic tools only
 * Turn off tool groups you do not need.
 */
import { RichTextEditor } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: '100%', maxWidth: 560 }}>
      <RichTextEditor aria-label="Comment" tools={{ textStyle: false, blocks: false, insert: false }} minHeight={96} />
    </div>
  );
}
