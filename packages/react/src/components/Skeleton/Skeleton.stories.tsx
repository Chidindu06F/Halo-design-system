import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const card: CSSProperties = {
  display: 'grid',
  gap: 12,
  width: 280,
  padding: 16,
  borderRadius: 12,
  border: '1px solid var(--halo-border-secondary)',
  background: 'var(--halo-surface-primary)',
};

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Grey shapes that hold the place of content while it loads, so nothing jumps when it arrives. Build layouts from `text`, `circle` and `rectangle`. Mark the loading area with `aria-busy="true"`; the shapes are hidden from screen readers.',
      },
    },
  },
  args: { shape: 'text', width: 200 },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** The Card pattern: an image, a title and two lines of text. */
export const CardPattern: Story = {
  render: () => (
    <div style={card} aria-busy="true">
      <Skeleton shape="rectangle" height={140} />
      <Skeleton width={170} height={16} />
      <Skeleton />
      <Skeleton width={100} />
    </div>
  ),
};

/** The List item pattern: an avatar and two lines. */
export const ListItemPattern: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: 320 }} aria-busy="true">
      <Skeleton shape="circle" />
      <div style={{ display: 'grid', gap: 6, flex: 1 }}>
        <Skeleton width={160} />
        <Skeleton width={100} />
      </div>
    </div>
  ),
};

/** The Stat tile pattern, for dashboards. */
export const StatTilePattern: Story = {
  render: () => (
    <div style={{ ...card, width: 240, gap: 8 }} aria-busy="true">
      <Skeleton width={100} />
      <Skeleton width={120} height={28} />
      <Skeleton width={80} />
    </div>
  ),
};
