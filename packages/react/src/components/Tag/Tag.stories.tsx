import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hash } from '@phosphor-icons/react';
import { Avatar } from '../Avatar';
import { Tag } from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A small label for a chosen value, a filter or a person. Pass `onRemove` to show a remove button. Use a Badge for read-only status instead.',
      },
    },
  },
  args: { children: 'Design', size: 'md' },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Sizes, with an icon, an avatar and disabled. */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <Tag size="sm">Small</Tag>
        <Tag>Medium</Tag>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Tag icon={<Hash />}>research</Tag>
        <Tag avatar={<Avatar size="xs" name="Ada Obi" color="purple" />}>Ada Obi</Tag>
        <Tag disabled onRemove={() => {}}>Disabled</Tag>
      </div>
    </div>
  ),
};

/** Remove tags one by one. */
export const Removable: Story = {
  render: function Render() {
    const [tags, setTags] = useState(['Design', 'Research', 'Writing', 'Strategy']);
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: 320 }}>
        {tags.map((t) => (
          <Tag key={t} onRemove={() => setTags(tags.filter((x) => x !== t))}>{t}</Tag>
        ))}
      </div>
    );
  },
};
