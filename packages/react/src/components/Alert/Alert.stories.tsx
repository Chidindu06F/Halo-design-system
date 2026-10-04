import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Alert } from './Alert';
import type { AlertType } from './Alert';

const types: AlertType[] = ['information', 'success', 'warning', 'error'];
const copy: Record<AlertType, [string, string]> = {
  information: ['A new version is available', 'Reload the page to get the latest changes.'],
  success: ['Payment received', 'A receipt is on its way to your inbox.'],
  warning: ['Your trial ends in 3 days', 'Add a payment method to keep your projects.'],
  error: ['Payment failed', 'Check your card details and try again.'],
};

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A message about the page or a task that stays until it is dealt with. Errors and warnings use `role="alert"` so screen readers announce them straight away; the others use `role="status"`. Use a Toast for short confirmations that go away by themselves.',
      },
    },
  },
  args: {
    type: 'information',
    variant: 'soft',
    layout: 'inline',
    size: 'md',
    title: copy.information[0],
    description: copy.information[1],
    actions: <Button variant="secondary" size="sm">Reload</Button>,
    onClose: () => {},
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const narrow: Story['decorators'] = [(Story) => <div style={{ maxWidth: 520 }}><Story /></div>];

export const Playground: Story = { decorators: narrow };

/** Every type in each style. */
export const Styles: Story = {
  decorators: narrow,
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {(['soft', 'outline', 'filled'] as const).flatMap((variant) =>
        types.map((type) => <Alert key={variant + type} type={type} variant={variant} title={copy[type][0]} description={copy[type][1]} onClose={() => {}} />),
      )}
    </div>
  ),
};

/** Small size, for tight spaces like a card or a form. */
export const Small: Story = {
  decorators: narrow,
  args: { size: 'sm', actions: <Button variant="secondary" size="xs">Reload</Button> },
};

/** One row across the top of a page. */
export const Banner: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <Alert layout="banner" title={copy.information[0]} description={copy.information[1]} actions={<Button variant="secondary" size="sm">Reload</Button>} onClose={() => {}} />
      <Alert layout="banner" size="sm" type="error" variant="filled" title={copy.error[0]} description={copy.error[1]} actions={<Button variant="secondary" size="xs">Update card</Button>} onClose={() => {}} />
    </div>
  ),
};
