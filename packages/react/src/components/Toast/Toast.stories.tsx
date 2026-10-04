import type { Meta, StoryObj } from '@storybook/react-vite';
import { Archive } from '@phosphor-icons/react';
import { Button } from '../Button';
import { Toast, ToastProvider, useToast } from './Toast';
import type { ToastType } from './Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  subcomponents: { ToastProvider },
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A short message about something that just happened. Wrap the app in `ToastProvider` once, then call `toast({ title })` from `useToast()`. Toasts close after 5 seconds (8 with actions), pause while hovered or focused, and are read out by screen readers. Use an Alert for messages that must stay.',
      },
    },
  },
  args: { title: 'Message archived', type: 'neutral', variant: 'default', icon: <Archive />, onClose: () => {} },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const types: ToastType[] = ['neutral', 'information', 'success', 'warning', 'error'];

/** Each type in both styles. */
export const Types: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: 12 }}>
      {types.flatMap((type) =>
        (['default', 'inverse'] as const).map((variant) => (
          <Toast
            key={type + variant}
            type={type}
            variant={variant}
            icon={type === 'neutral' ? <Archive /> : undefined}
            title={type === 'error' ? 'Upload failed' : 'Changes saved'}
            description="Just now"
            onClose={() => {}}
          />
        )),
      )}
    </div>
  ),
};

/** With an Undo action. */
export const WithAction: Story = {
  args: { description: 'It moved to the archive.', actions: <Button variant="secondary" size="xs">Undo</Button> },
};

function Demo() {
  const { toast } = useToast();
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button variant="secondary" onClick={() => toast({ title: 'Changes saved', type: 'success' })}>Success</Button>
      <Button variant="secondary" onClick={() => toast({ title: 'Upload failed', description: 'The file is over 10 MB.', type: 'error' })}>Error</Button>
      <Button
        variant="secondary"
        onClick={() => toast({ title: 'Message archived', icon: <Archive />, variant: 'inverse', actions: <Button size="xs" variant="secondary">Undo</Button> })}
      >
        With action
      </Button>
    </div>
  );
}

/** Press the buttons to show toasts in the bottom right corner. */
export const Live: Story = {
  render: () => (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  ),
};
