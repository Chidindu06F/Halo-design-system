/**
 * With icons
 * Text with icons, icon only and mixed. Icon-only items need an aria-label.
 */
import { Button, ButtonGroup } from '@halo-ds/react';
import { Copy, DownloadSimple, Minus, Plus, ShareNetwork } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-stack">
      <ButtonGroup aria-label="File actions">
        <Button iconLeft={<Copy />}>Copy</Button>
        <Button iconLeft={<ShareNetwork />}>Share</Button>
        <Button iconLeft={<DownloadSimple />}>Download</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Zoom">
        <Button iconOnly aria-label="Zoom out"><Minus /></Button>
        <Button>100%</Button>
        <Button iconOnly aria-label="Zoom in"><Plus /></Button>
      </ButtonGroup>
    </div>
  );
}
