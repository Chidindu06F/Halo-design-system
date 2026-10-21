/**
 * Stacked and nested
 * A top area over a bottom area split in two.
 */
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@halo-ds/react';

const pane = { display: 'grid', placeItems: 'center', height: '100%', color: 'var(--halo-text-secondary)', fontWeight: 600 } as const;

export default function Demo() {
  return (
    <div style={{ width: '100%', height: 300, borderRadius: 16, overflow: 'hidden', boxShadow: 'inset 0 0 0 1px var(--halo-border-secondary)' }}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={50}>
          <div style={pane}>Editor</div>
        </ResizablePanel>
        <ResizableHandle withHandle aria-label="Resize editor" />
        <ResizablePanel>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={50}>
              <div style={pane}>Console</div>
            </ResizablePanel>
            <ResizableHandle withHandle aria-label="Resize console" />
            <ResizablePanel>
              <div style={pane}>Preview</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
