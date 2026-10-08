import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '../Text';
import { Rating } from './Rating';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Stars for giving a score or showing one. People click a star or use the arrow keys; with `allowHalf`, the left half of a star gives a half. Use `readOnly` to show an average, which screen readers hear as "4.5 out of 5 stars".',
      },
    },
  },
  args: { 'aria-label': 'Rate this course', defaultValue: 3 },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Small, Medium and Large, as in Figma. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
      <Rating size="sm" defaultValue={4} aria-label="Small" />
      <Rating size="md" defaultValue={4} aria-label="Medium" />
      <Rating size="lg" defaultValue={4} aria-label="Large" />
    </div>
  ),
};

/** An average next to the number of reviews. */
export const ReadOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Rating readOnly allowHalf value={4.5} size="sm" aria-label="Average rating" />
      <Text as="span" size="sm" weight="semibold">4.5</Text>
      <Text as="span" size="sm" color="secondary">(1,284 reviews)</Text>
    </div>
  ),
};

/** Half stars, with the chosen score shown. */
export const HalfStars: Story = {
  render: function Render() {
    const [score, setScore] = useState(3.5);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Rating allowHalf value={score} onValueChange={setScore} size="lg" aria-label="Rate your stay" />
        <Text as="span" size="sm" color="secondary">{score} of 5</Text>
      </div>
    );
  },
};

export const Disabled: Story = { args: { disabled: true } };
