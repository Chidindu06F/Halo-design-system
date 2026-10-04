import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar, ProgressCircle } from './Progress';

const meta = {
  title: 'Components/Progress',
  component: ProgressBar,
  subcomponents: { ProgressCircle },
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Shows how far along something is. Leave `value` out for an indeterminate bar when you can\'t measure progress. Add `label`, `valueLabel` and `hint` for a Progress field. Say what happened at the end in the hint, so success and failure never rely on colour alone.',
      },
    },
  },
  args: { value: 60, status: 'default', size: 'sm', label: 'Uploading files', hint: '3 of 5 files uploaded' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Default, Success, Error and Indeterminate. */
export const Status: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <ProgressBar value={60} label="Uploading files" hint="3 of 5 files uploaded" />
      <ProgressBar value={100} status="success" label="Uploading files" hint="Upload complete" />
      <ProgressBar value={60} status="error" label="Uploading files" hint="Upload failed. Check your connection and try again." />
      <ProgressBar label="Preparing your export" valueLabel="" hint="This can take a minute." />
    </div>
  ),
};

/** An amount instead of a percentage. */
export const Storage: Story = {
  args: { value: 72, label: 'Storage', valueLabel: '7.2 of 10 GB', hint: 'Upgrade your plan for more space.' },
};

/** A ring for small or square spaces. */
export const Circle: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <ProgressCircle value={25} size="sm" aria-label="Profile complete" />
      <ProgressCircle value={50} size="md" aria-label="Profile complete" />
      <ProgressCircle value={75} size="lg" aria-label="Profile complete" />
    </div>
  ),
};
