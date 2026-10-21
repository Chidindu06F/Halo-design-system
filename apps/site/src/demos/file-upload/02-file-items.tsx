/**
 * File items
 * Uploading with progress, done, and failed with a retry.
 */
import { FileItem } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-stack" style={{ width: 400 }}>
      <FileItem name="Quarterly report.pdf" size={2_400_000} status="uploading" progress={45} onCancel={() => {}} />
      <FileItem name="Cover image.png" size={840_000} status="complete" onRemove={() => {}} />
      <FileItem name="Intro video.mov" size={48_000_000} status="error" onRetry={() => {}} onRemove={() => {}} />
    </div>
  );
}
