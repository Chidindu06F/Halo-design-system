import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge';
import { Card } from '../Card';
import { Text } from '../Text';
import { Carousel, CarouselSlide } from './Carousel';

// Abstract images from Unsplash (see THIRD_PARTY_NOTICES.md). Decorative, so alt is empty.
const images = ['waves', 'orb', 'blend', 'waves', 'orb'];
const photo = (name: string) => (
  <img src={`cards/${name}.jpg`} alt="" style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }} />
);

const courses = [
  { title: 'Budgeting basics', meta: '6 lessons', tag: 'New' },
  { title: 'Sleep and focus', meta: '4 lessons', tag: 'Popular' },
  { title: 'Intro to statistics', meta: '9 lessons', tag: 'New' },
  { title: 'Saving for a home', meta: '5 lessons', tag: 'Popular' },
  { title: 'Healthy routines', meta: '7 lessons', tag: 'New' },
];

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  subcomponents: { CarouselSlide },
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A row of slides people swipe, scroll or step through with the arrows, the dots or the arrow keys. It never moves on its own, so nobody loses their place. Each slide is announced as "2 of 5". Use `slidesPerView` to show more than one.',
      },
    },
  },
  args: { 'aria-label': 'Highlights', children: null },
  decorators: [(Story) => <div style={{ maxWidth: 640 }}><Story /></div>],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

/** One image at a time. */
export const Playground: Story = {
  render: (args) => (
    <Carousel {...args}>
      {images.map((n, i) => <CarouselSlide key={i}>{photo(n)}</CarouselSlide>)}
    </Carousel>
  ),
};

/** Cards, three at a time. */
export const Cards: Story = {
  render: () => (
    <Carousel aria-label="Featured courses" slidesPerView={3}>
      {courses.map((c, i) => (
        <CarouselSlide key={c.title}>
          <Card media={photo(images[i]!)}>
            <Badge color={c.tag === 'New' ? 'brand' : 'neutral'}>{c.tag}</Badge>
            <Text weight="semibold">{c.title}</Text>
            <Text size="sm" color="secondary">{c.meta}</Text>
          </Card>
        </CarouselSlide>
      ))}
    </Carousel>
  ),
};

/** No arrows: people swipe or use the dots. */
export const DotsOnly: Story = {
  render: () => (
    <Carousel aria-label="Highlights" showArrows={false}>
      {images.slice(0, 3).map((n, i) => <CarouselSlide key={i}>{photo(n)}</CarouselSlide>)}
    </Carousel>
  ),
};
