import type { Meta, StoryObj } from '@storybook/react-vite';
import { FolderOpen, MagnifyingGlass } from '@phosphor-icons/react';
import { Button } from '../Button';
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
          'Fills a space that has nothing to show yet. Say why it is empty and give the next step. Pass `icon` for the grey circle, or `media` for an illustration.',
      },
    },
  },
  args: {
    size: 'lg',
    icon: <FolderOpen />,
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
