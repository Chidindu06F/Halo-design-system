/**
 * With icons
 * An arrow suggests going somewhere. An "open" icon marks links that leave the site.
 */
import { LinkButton } from '@halo-ds/react';
import { ArrowLeft, ArrowSquareOut, DownloadSimple } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <LinkButton href="#" iconLeft={<ArrowLeft />}>Back to projects</LinkButton>
      <LinkButton iconLeft={<DownloadSimple />}>Download report</LinkButton>
      <LinkButton href="https://example.com" target="_blank" rel="noreferrer" iconRight={<ArrowSquareOut />}>Help centre</LinkButton>
    </div>
  );
}
