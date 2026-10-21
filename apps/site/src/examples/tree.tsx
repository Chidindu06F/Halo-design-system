import { Tree } from '@halo-ds/react';
import { File, FilePdf, Folder } from '@phosphor-icons/react';

const files = [
  {
    id: 'brand',
    label: 'Brand',
    icon: <Folder />,
    children: [
      { id: 'logos', label: 'Logos', icon: <Folder />, children: [{ id: 'logo', label: 'Logo.svg', icon: <File /> }] },
      { id: 'guide', label: 'Guidelines.pdf', icon: <FilePdf /> },
    ],
  },
  { id: 'notes', label: 'Notes.txt', icon: <File /> },
];

export default function Example() {
  return (
    <div style={{ width: 300 }}>
      <Tree nodes={files} defaultExpanded={['brand']} defaultSelected="guide" aria-label="Files" />
    </div>
  );
}
