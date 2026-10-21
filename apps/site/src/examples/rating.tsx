import { Rating } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
      <Rating aria-label="Rate this course" defaultValue={3} />
      <Rating aria-label="Average rating" value={4.5} allowHalf readOnly size="sm" />
    </div>
  );
}
