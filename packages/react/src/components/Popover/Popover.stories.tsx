import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Popover } from './Popover';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A small panel that opens next to the element people clicked, for extra detail or a quick action. It flips to the other side when there is no room. Escape, a click outside or the close button closes it, and focus returns to the trigger. Use a Tooltip for a short hint on hover, and a Modal when the task needs full attention.',
      },
    },
  },
  args: {
    trigger: <Button variant="secondary">Open popover</Button>,
    title: 'Share this file',
    description: 'Anyone with the link can view it. You can turn the link off at any time.',
    side: 'bottom',
    align: 'center',
    arrow: true,
    showClose: true,
  },
  decorators: [(Story) => <div style={{ padding: 120 }}><Story /></div>],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Buttons at the bottom right for a quick decision. */
export const WithActions: Story = {
  args: {
    title: 'Archive project?',
    description: 'It moves to the archive. You can restore it later.',
    actions: (
      <>
        <Button variant="secondary" size="sm">Cancel</Button>
        <Button size="sm">Archive</Button>
      </>
    ),
  },
};

/** Opened by default on each side. */
export const Sides: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', gap: 200 }}>
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Popover key={side} side={side} trigger={<Button variant="secondary">{side}</Button>} title="Details" description="Short supporting text." />
      ))}
    </div>
  ),
};

/** No arrow, no close button, just content. */
export const Plain: Story = {
  args: { arrow: false, showClose: false, title: undefined, description: undefined, children: 'Last edited 2 hours ago by the design team.' },
};
