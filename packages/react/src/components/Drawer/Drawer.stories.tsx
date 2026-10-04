import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { InputField } from '../Input';
import { Switch } from '../Switch';
import { Drawer } from './Drawer';
import type { DrawerProps } from './Drawer';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A panel that slides in from an edge for details, filters or a form while the page stays in view. It behaves like a Modal: focus stays inside, and Escape or the overlay closes it. The body scrolls when it is long. Use the bottom side on small screens.',
      },
    },
  },
  args: { open: false, onClose: () => {}, title: 'Filters', description: 'Narrow down the list.', side: 'right', size: 'md' },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

function Example(args: Partial<DrawerProps>) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Open drawer</Button>
      <Drawer
        title="Filters"
        description="Narrow down the list."
        {...args}
        open={open}
        onClose={close}
        actions={
          <>
            <Button variant="secondary" onClick={close}>Reset</Button>
            <Button onClick={close}>Apply</Button>
          </>
        }
      >
        <InputField label="Keyword" placeholder="Search" />
        <Switch label="Only show active" defaultChecked />
        <Switch label="Include archived" />
      </Drawer>
    </>
  );
}

export const Playground: Story = { render: (args) => <Example side={args.side} size={args.size} /> };

/** Slides in from the left. */
export const Left: Story = { render: () => <Example side="left" size="sm" /> };

/** A bottom sheet with a grip and full-width buttons. */
export const Bottom: Story = { render: () => <Example side="bottom" /> };
