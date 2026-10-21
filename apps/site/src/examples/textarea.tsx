import { TextareaField } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ width: 360 }}>
      <TextareaField label="Message" placeholder="Write your message" maxLength={280} hint="Keep it short." />
    </div>
  );
}
