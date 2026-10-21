/**
 * Styles
 * Soft, outline and filled. Soft is the default and suits most pages.
 */
import { Alert } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: '100%', maxWidth: 520 }}>
      <Alert variant="soft" type="information" title="Soft" description="The default, for most messages." />
      <Alert variant="outline" type="success" title="Outline" description="A quieter border on the page background." />
      <Alert variant="filled" type="error" title="Filled" description="For messages that must not be missed." />
    </div>
  );
}
