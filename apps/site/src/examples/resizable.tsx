import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@halo-ds/react';

const pane = { display: 'grid', placeItems: 'center', height: '100%', color: 'var(--halo-text-secondary)', fontWeight: 600 } as const;

export default function Example() {
  return (
    <div style={{ width: '100%', height: 260, borderRadius: 16, overflow: 'hidden', boxShadow: 'inset 0 0 0 1px var(--halo-border-secondary)' }}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30} minSize={20}>
          <div style={pane}>Files</div>
        </ResizablePanel>
        <ResizableHandle withHandle aria-label="Resize file list" />
        <ResizablePanel>
          <div style={pane}>Preview</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
