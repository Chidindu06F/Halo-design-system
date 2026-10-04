import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Turns one setting on or off straight away, with no Save button. It is a button with role="switch", so screen readers say "switch, on". Use a Checkbox when the choice is sent with a form.',
      },
    },
  },
  args: { label: 'Email notifications', description: 'A weekly summary of activity.', defaultChecked: true, size: 'md', controlPosition: 'start' },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** A settings list: End puts every switch on the right. */
export const Settings: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 360 }}>
      <Switch controlPosition="end" label="Email notifications" description="A weekly summary of activity." defaultChecked />
      <Switch controlPosition="end" label="Push notifications" description="Mentions and replies." defaultChecked />
      <Switch controlPosition="end" label="Reduce motion" description="Turn off animations." />
      <Switch controlPosition="end" label="Sync calendar" description="Connect a calendar first." disabled />
    </div>
  ),
};

/** Small switches for view panels. */
export const Small: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <Switch size="sm" label="Show weekends" defaultChecked />
      <Switch size="sm" label="Show week numbers" />
    </div>
  ),
};
