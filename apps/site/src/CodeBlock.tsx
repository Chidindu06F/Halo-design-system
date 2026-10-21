import { useState } from 'react';
import { CompactButton, Tooltip } from '@halo-ds/react';
import { Check, Copy } from '@phosphor-icons/react';

/** Code with a copy button. Kept plain on purpose: monospace, no colour coding. */
export function CodeBlock({ code, label = 'Copy code', compact = false }: { code: string; label?: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked; the code is still there to select by hand
    }
  };
  return (
    <div className={compact ? 'code code-compact' : 'code'}>
      <pre>
        <code>{code}</code>
      </pre>
      <div className="code-copy">
        <Tooltip content={copied ? 'Copied' : label}>
          <CompactButton variant="ghost" size="md" aria-label={copied ? 'Copied' : label} onClick={copy}>
            {copied ? <Check /> : <Copy />}
          </CompactButton>
        </Tooltip>
      </div>
    </div>
  );
}
