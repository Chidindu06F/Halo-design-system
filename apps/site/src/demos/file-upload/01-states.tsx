/**
 * States
 * An error that says what went wrong, and disabled.
 */
import { FileUpload } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 400 }}>
      <FileUpload description="PDF up to 10 MB" error="That file is over 10 MB." onFiles={() => {}} />
      <FileUpload description="PDF up to 10 MB" disabled onFiles={() => {}} />
    </div>
  );
}
