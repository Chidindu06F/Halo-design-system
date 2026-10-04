import type { Meta, StoryObj } from '@storybook/react-vite';
import { Copy, DotsThree, PencilSimple, ShareNetwork, Trash } from '@phosphor-icons/react';
import { Button } from '../Button';
import { CompactButton } from '../CompactButton';
import { Menu } from './Menu';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A list of actions that opens from a button. Arrow keys move between items, Home and End jump to the ends, Enter or Space chooses, and Escape closes and returns focus. Group related items with labels and separators, and put destructive actions last.',
      },
    },
  },
  args: {
    'aria-label': 'File actions',
    trigger: (
      <CompactButton aria-label="More actions">
        <DotsThree />
      </CompactButton>
    ),
    items: [
      { label: 'Edit', icon: <PencilSimple />, shortcut: '⌘E' },
      { label: 'Duplicate', icon: <Copy />, shortcut: '⌘D' },
      { label: 'Share', icon: <ShareNetwork /> },
      { type: 'separator' },
      { label: 'Delete', icon: <Trash />, destructive: true },
    ],
  },
  decorators: [(Story) => <div style={{ padding: 120 }}><Story /></div>],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** A chosen option shows a check mark, like a sort order. */
export const WithSelection: Story = {
  args: {
    'aria-label': 'Sort by',
    trigger: <Button variant="secondary">Sort</Button>,
    items: [
      { type: 'label', label: 'Sort by' },
      { label: 'Newest first', selected: true },
      { label: 'Oldest first' },
      { label: 'Name' },
      { type: 'separator' },
      { label: 'Size', disabled: true },
    ],
  },
};
