import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PenNib } from '@phosphor-icons/react';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Text } from '../Text';
import { Card } from './Card';

// Abstract images from Unsplash (see THIRD_PARTY_NOTICES.md). Decorative, so alt is empty.
const image = (name: string) => <img src={`cards/${name}.jpg`} alt="" />;

const grid: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 320px)', gap: 24, alignItems: 'start' };
const row: CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, alignSelf: 'stretch' };
const tile: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 24,
  height: 24,
  borderRadius: 4,
  background: 'var(--halo-button-primary)',
  color: 'var(--halo-icon-on-brand)',
  fontSize: 16,
};

/** The default Content layout from Figma: icon tile, title and description, avatar. */
function FileRow({ title, meta, person, photo = 1 }: { title: string; meta: string; person: string; photo?: number }) {
  return (
    <div style={row}>
      <span style={tile} aria-hidden="true"><PenNib weight="fill" /></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <Text size="md" weight="semibold" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</Text>
        <Text size="sm" color="secondary">{meta}</Text>
      </div>
      <Avatar size="sm" src={`avatars/photo-${String(photo).padStart(2, '0')}.jpg`} name={person} />
    </div>
  );
}

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A container for an image and content about one thing, like a file, a project or an article. Pass an image as `media`, and anything you like as children: they stack with 12px between them inside 16px padding.\n\nAdd `href` (or `onClick`) to make the **whole card** one link, with hover and focus states. If the card has its own buttons, leave both out: a card is either one big link or a container with actions, never both.',
      },
    },
  },
  argTypes: {
    media: { control: false },
    children: { control: false },
  },
  args: {
    href: '#',
    style: { width: 320 },
    media: image('orb'),
    children: <FileRow title="Brand refresh" meta="Edited 5 minutes ago" person="Tobi Adeyemi" />,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A clickable file card. Point at it, or press Tab, to see the hover and focus states. */
export const Playground: Story = {};

/** Common Content layouts: a file, text only, with an action, and without media. */
export const Layouts: Story = {
  render: () => (
    <div style={grid}>
      <Card href="#" media={image('orb')}>
        <FileRow title="Brand refresh" meta="Edited 5 minutes ago" person="Tobi Adeyemi" />
      </Card>
      <Card href="#" media={<span />}>
        <Text size="lg" weight="semibold">Q4 roadmap</Text>
        <Text color="secondary">Plans and goals for the next three months.</Text>
      </Card>
      <Card media={image('waves')}>
        <Text size="lg" weight="semibold">Night sky wallpapers</Text>
        <Text color="secondary">A set of 12 abstract backgrounds for desktop and mobile.</Text>
        <Button size="sm">Download</Button>
      </Card>
      <Card>
        <div style={{ display: 'flex', gap: 8 }}>
          <Badge size="sm" color="brand" variant="solid">New</Badge>
          <Badge size="sm">5 min read</Badge>
        </div>
        <Text size="lg" weight="semibold">Designing with colour</Text>
        <Text color="secondary">How to build a palette that works in light and dark mode.</Text>
        <Button size="sm" variant="secondary">Read more</Button>
      </Card>
    </div>
  ),
};

/** Clickable cards are one link each: hover darkens the border, keyboard focus shows a ring. */
export const Clickable: Story = {
  render: () => (
    <div style={grid}>
      <Card href="#" media={image('orb')}>
        <FileRow title="Brand refresh" meta="Edited 5 minutes ago" person="Tobi Adeyemi" />
      </Card>
      <Card href="#" media={image('blend')}>
        <FileRow title="Mobile app" meta="Shared with 4 people" person="Ada Okafor" photo={4} />
      </Card>
      <Card href="#" media={image('waves')}>
        <FileRow title="Night sky wallpapers" meta="Edited yesterday" person="Femi Ola" photo={7} />
      </Card>
    </div>
  ),
};
