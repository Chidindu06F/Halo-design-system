/**
 * In a file row
 * Compact buttons keep row actions small, so the file name stays the focus.
 */
import { CompactButton } from '@halo-ds/react';
import { DownloadSimple, FilePdf, Trash } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-panel" style={{ display: 'flex', alignItems: 'center', gap: 12, width: 340 }}>
      <FilePdf size={24} />
      <span style={{ flex: 1 }}>Project brief.pdf</span>
      <CompactButton variant="ghost" aria-label="Download Project brief.pdf"><DownloadSimple /></CompactButton>
      <CompactButton variant="ghost" aria-label="Delete Project brief.pdf"><Trash /></CompactButton>
    </div>
  );
}
