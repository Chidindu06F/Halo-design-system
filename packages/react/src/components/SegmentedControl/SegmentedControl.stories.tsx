import type { Meta, StoryObj } from '@storybook/react-vite';
import { List, SquaresFour } from '@phosphor-icons/react';
import { SegmentedControl } from './SegmentedControl';

const meta = {
  title: 'Components/Segmented control',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Picks one of 2 to 5 options and applies it straight away, like Day, Week or Month. It works like a radio group: Tab reaches the chosen option and arrow keys move between them. Use Tabs to switch content sections, and Radio for choices sent with a form.',
      },
    },
  },
  args: {
    'aria-label': 'View',
    defaultValue: 'week',
    size: 'md',
    options: [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
    ],
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Fill shares the width, for phones and panels. */
export const FullWidth: Story = {
  args: { fullWidth: true, defaultValue: 'yearly', options: [{ value: 'monthly', label: 'Monthly' }, { value: 'yearly', label: 'Yearly' }], 'aria-label': 'Billing' },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};

/** Icon-only options need an aria-label each. */
export const Icons: Story = {
  args: {
    'aria-label': 'Layout',
    defaultValue: 'list',
    options: [
      { value: 'list', icon: <List />, 'aria-label': 'List view' },
      { value: 'grid', icon: <SquaresFour />, 'aria-label': 'Grid view' },
    ],
  },
};
