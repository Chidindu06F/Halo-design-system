import type { Meta, StoryObj } from '@storybook/react-vite';
import { FolderOpen, MagnifyingGlass } from '@phosphor-icons/react';
import { Button } from '../Button';
import { Illustration } from '../Illustration';
import { EmptyState } from './EmptyState';

const meta = {
  title: 'Components/Empty state',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Fills a space that has nothing to show yet. Say why it is empty and give the next step. Pass an `Illustration` through `media` for large spaces like pages and main panels, or `icon` for the grey circle in small ones like cards. See Foundations, Illustrations for all forty drawings.',
      },
    },
  },
  args: {
    size: 'lg',
    media: <Illustration name="no-projects" />,
    title: 'No projects yet',
    description: 'Create a project to start organising your work.',
    actions: (
      <>
        <Button>New project</Button>
        <Button variant="secondary">Import</Button>
      </>
    ),
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Small, for a card or a side panel. */
export const Small: Story = {
  args: {
    size: 'sm',
    icon: <MagnifyingGlass />,
    title: 'No results',
    description: 'Try a different word or clear the filters.',
    actions: <Button size="sm" variant="secondary">Clear filters</Button>,
  },
};

/** Illustrations suit large empty states across many kinds of product. */
export const WithIllustrations: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
      <EmptyState
        media={<Illustration name="no-results" />}
        title="No results for “invoice”"
        description="Try a different word or clear the filters."
        actions={<Button variant="secondary">Clear filters</Button>}
      />
      <EmptyState
        media={<Illustration name="no-transactions" />}
        title="No transactions yet"
        description="Payments in and out will show up here."
        actions={<Button>Add money</Button>}
      />
      <EmptyState media={<Illustration name="all-caught-up" />} title="You’re all caught up" description="New messages will show up here." />
      <EmptyState
        media={<Illustration name="no-courses" />}
        title="Start learning"
        description="Courses you join will appear here."
        actions={<Button>Browse courses</Button>}
      />
    </div>
  ),
};

/** The icon circle, for a project list with nothing in it. */
export const WithIcon: Story = {
  args: { media: undefined, icon: <FolderOpen /> },
};
