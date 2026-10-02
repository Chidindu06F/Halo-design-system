import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Copy, DownloadSimple, Gear, LinkSimple, ShareNetwork, TextB, TextItalic, TextUnderline, Trash } from '@phosphor-icons/react';
import { Button } from '../Button';
import { CompactButton } from '../CompactButton';
import { Tooltip } from './Tooltip';
import type { TooltipSide } from './Tooltip';

const sides: TooltipSide[] = ['top', 'bottom', 'left', 'right'];
const row: CSSProperties = { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 48, padding: 48 };
const card: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: 20,
  borderRadius: 16,
  border: '1px solid var(--halo-border-secondary)',
  background: 'var(--halo-surface-primary)',
  font: '500 15px/22px var(--halo-font-family-body)',
  color: 'var(--halo-text-primary)',
};

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A short label that appears next to an element on hover (after a short delay) or keyboard focus (straight away), and hides when you move away or press Esc. Wrap the element in `Tooltip`. Use it to name icon-only buttons or show truncated text; for anything clickable, use a Popover.',
      },
    },
  },
  argTypes: {
    content: { control: 'text' },
    side: { control: 'inline-radio', options: sides, table: { type: { summary: sides.map((s) => `'${s}'`).join(' | ') } } },
    delay: { control: { type: 'number', min: 0, step: 100 } },
    children: { control: false },
  },
  args: {
    content: 'Delete',
    side: 'top',
    delay: 500,
    children: <CompactButton variant="ghost" aria-label="Delete"><Trash /></CompactButton>,
  },
  decorators: [(Story) => <div style={{ padding: 48 }}><Story /></div>],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Point at the button, or press Tab to focus it. */
export const Playground: Story = {};

/** Four sides. If there's no room, the tooltip flips to the opposite side. */
export const Placement: Story = {
  render: () => (
    <div style={row}>
      <Tooltip content="Delete" side="top"><CompactButton variant="ghost" aria-label="Delete"><Trash /></CompactButton></Tooltip>
      <Tooltip content="Copy" side="bottom"><CompactButton variant="ghost" aria-label="Copy"><Copy /></CompactButton></Tooltip>
      <Tooltip content="Settings" side="left"><CompactButton variant="ghost" aria-label="Settings"><Gear /></CompactButton></Tooltip>
      <Tooltip content="Download" side="right"><CompactButton variant="ghost" aria-label="Download"><DownloadSimple /></CompactButton></Tooltip>
    </div>
  ),
};

/** A toolbar: once one tooltip is showing, moving to the next shows it straight away. */
export const Toolbar: Story = {
  render: () => (
    <div style={{ ...card, gap: 6, width: 'fit-content' }}>
      {[['Bold (Ctrl B)', <TextB key="b" />], ['Italic (Ctrl I)', <TextItalic key="i" />], ['Underline (Ctrl U)', <TextUnderline key="u" />], ['Add link', <LinkSimple key="l" />]].map(([label, icon]) => (
        <Tooltip key={String(label)} content={label}>
          <CompactButton variant="ghost" aria-label={String(label)}>{icon}</CompactButton>
        </Tooltip>
      ))}
    </div>
  ),
};

/** Works on any element that can take focus, such as an icon-only Button or truncated text. */
export const InUse: Story = {
  name: 'In use',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
      <div style={card}>
        <span style={{ flex: 1 }}>Brand guidelines.pdf</span>
        <Tooltip content="Share"><CompactButton variant="ghost" aria-label="Share"><ShareNetwork /></CompactButton></Tooltip>
        <Tooltip content="Delete"><CompactButton variant="ghost" aria-label="Delete"><Trash /></CompactButton></Tooltip>
      </div>
      <Tooltip content="Settings"><Button variant="secondary" iconOnly aria-label="Settings"><Gear /></Button></Tooltip>
      <Tooltip content="Quarterly marketing report, final version">
        <span tabIndex={0} style={{ ...card, display: 'inline-block', maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Quarterly marketing report, final version
        </span>
      </Tooltip>
    </div>
  ),
};
