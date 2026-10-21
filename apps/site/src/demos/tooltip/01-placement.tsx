/**
 * Placement
 * Four sides. If there is no room, the tooltip flips to the opposite side.
 */
import { CompactButton, Tooltip } from '@halo-ds/react';
import { Copy, DownloadSimple, Gear, Trash } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row" style={{ gap: 24 }}>
      <Tooltip content="Delete" side="top"><CompactButton variant="ghost" aria-label="Delete"><Trash /></CompactButton></Tooltip>
      <Tooltip content="Copy" side="bottom"><CompactButton variant="ghost" aria-label="Copy"><Copy /></CompactButton></Tooltip>
      <Tooltip content="Settings" side="left"><CompactButton variant="ghost" aria-label="Settings"><Gear /></CompactButton></Tooltip>
      <Tooltip content="Download" side="right"><CompactButton variant="ghost" aria-label="Download"><DownloadSimple /></CompactButton></Tooltip>
    </div>
  );
}
