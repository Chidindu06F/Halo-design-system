import { CompactButton } from '@halo-ds/react';
import { Copy } from '@phosphor-icons/react';

export default function Thumb() {
  return (
    <div style={{ display: 'grid', gap: 6, justifyItems: 'center' }}>
      <span style={{ padding: '4px 10px', borderRadius: 8, background: 'var(--halo-surface-invert)', color: 'var(--halo-text-invert)', fontSize: 13 }}>Copy link</span>
      <CompactButton variant="stroke" aria-label="Copy link"><Copy /></CompactButton>
    </div>
  );
}
