import { FileItem, FileUpload } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 12, width: 400 }}>
      <FileUpload description="PNG, JPG or PDF, up to 10 MB" accept="image/png,image/jpeg,.pdf" onFiles={() => {}} />
      <FileItem name="Brand guidelines.pdf" size={2_400_000} status="uploading" progress={60} onCancel={() => {}} />
      <FileItem name="Cover.png" size={840_000} status="complete" onRemove={() => {}} />
    </div>
  );
}
