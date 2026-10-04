import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'A thin line that separates content. Use `label` for text in the line, like "or".' } },
  },
  args: { orientation: 'horizontal', color: 'subtle', variant: 'solid' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Subtle and strong, solid and dashed. */
export const Styles: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <Divider />
      <Divider color="strong" />
      <Divider variant="dashed" />
      <Divider label="or" />
      <Divider label="Section" labelPosition="start" />
    </div>
  ),
};

/** A vertical line between items in a row. */
export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 24, fontFamily: 'var(--halo-font-family-body)' }}>
      Edit <Divider orientation="vertical" /> Share <Divider orientation="vertical" /> Delete
    </div>
  ),
};
