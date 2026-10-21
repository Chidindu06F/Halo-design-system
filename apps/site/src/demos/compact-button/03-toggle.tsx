/**
 * Toggle
 * Selected is for buttons that switch something on and off. Click them to try it.
 */
import { useState } from 'react';
import { CompactButton } from '@halo-ds/react';
import { TextB, TextItalic, TextUnderline } from '@phosphor-icons/react';

export default function Demo() {
  const [on, setOn] = useState<Record<string, boolean>>({ bold: true });
  const toggle = (k: string) => setOn((s) => ({ ...s, [k]: !s[k] }));
  return (
    <div className="demo-row">
      <CompactButton variant="ghost" selected={!!on.bold} onClick={() => toggle('bold')} aria-label="Bold"><TextB /></CompactButton>
      <CompactButton variant="ghost" selected={!!on.italic} onClick={() => toggle('italic')} aria-label="Italic"><TextItalic /></CompactButton>
      <CompactButton variant="ghost" selected={!!on.underline} onClick={() => toggle('underline')} aria-label="Underline"><TextUnderline /></CompactButton>
    </div>
  );
}
