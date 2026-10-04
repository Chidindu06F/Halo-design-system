import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioGroup } from './Radio';

const meta = {
  title: 'Components/Radio',
  component: RadioGroup,
  subcomponents: { Radio },
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A labelled set of options where exactly one can be chosen. Real radio inputs, so Tab reaches the group and arrow keys move between options. Use a Select for long lists and a Checkbox to pick several.',
      },
    },
  },
  args: {
    label: 'Contact method',
    hint: 'We only use this for order updates.',
    defaultValue: 'email',
    orientation: 'vertical',
    size: 'md',
    children: null,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="email" label="Email" />
      <Radio value="phone" label="Phone call" />
      <Radio value="text" label="Text message" />
    </RadioGroup>
  ),
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Descriptions help people compare options. */
export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup label="Delivery" defaultValue="standard">
      <Radio value="standard" label="Standard" description="3 to 5 working days" />
      <Radio value="express" label="Express" description="Next working day" />
      <Radio value="store" label="Collect in store" description="Ready in 2 hours" />
    </RadioGroup>
  ),
};

/** Two or three short options in a row. */
export const Horizontal: Story = {
  render: () => (
    <RadioGroup label="Billing" orientation="horizontal" defaultValue="yearly" hint="Save 20% with yearly billing.">
      <Radio value="monthly" label="Monthly" />
      <Radio value="yearly" label="Yearly" />
    </RadioGroup>
  ),
};

/** Error turns every circle red and shows the hint as an error. */
export const Error: Story = {
  render: () => (
    <RadioGroup label="Contact method" required error="Choose how we should contact you.">
      <Radio value="email" label="Email" />
      <Radio value="phone" label="Phone call" />
    </RadioGroup>
  ),
};
