import type { Meta, StoryObj } from '@storybook/react-vite';
import { RangeSlider, Slider } from './Slider';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  subcomponents: { RangeSlider },
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Picks a rough value by dragging, with the effect shown straight away. Built on real range inputs, so arrow keys, Page Up and Down, Home and End all work. Use `formatValue` for readable values like "40%". Pair with a NumberInput when exact values matter.',
      },
    },
  },
  args: { label: 'Volume', defaultValue: 40, showMinMax: true, size: 'md', formatValue: (v: number) => `${v}%` },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Two handles for a start and an end. */
export const Range: Story = {
  render: () => <RangeSlider label="Price" min={0} max={200} defaultValue={[20, 60]} showMinMax handleLabels={['Minimum price', 'Maximum price']} />,
};

/** Small and disabled. */
export const SmallAndDisabled: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <Slider size="sm" aria-label="Opacity" defaultValue={60} />
      <Slider label="Volume" defaultValue={40} disabled />
    </div>
  ),
};
