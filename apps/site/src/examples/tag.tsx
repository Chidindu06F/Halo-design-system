import { useState } from 'react';
import { Tag } from '@halo-ds/react';

export default function Example() {
  const [tags, setTags] = useState(['Design', 'Research', 'Marketing', 'Finance']);
  const colors = ['blue', 'green', 'orange', 'purple'] as const;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {tags.map((t, i) => (
        <Tag key={t} color={colors[i % colors.length]} onRemove={() => setTags(tags.filter((x) => x !== t))}>
          {t}
        </Tag>
      ))}
    </div>
  );
}
