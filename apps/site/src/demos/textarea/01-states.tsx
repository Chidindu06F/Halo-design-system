/**
 * States
 * An error with a message that says what to do, and disabled.
 */
import { TextareaField } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 360 }}>
      <TextareaField label="Bio" error="Add a few words about yourself." />
      <TextareaField label="Notes" disabled defaultValue="Read only for now." />
    </div>
  );
}
