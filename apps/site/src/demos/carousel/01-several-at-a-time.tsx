/**
 * Several at a time
 * Cards, three at a time, with arrows to move along.
 */
import { Card, Carousel, CarouselSlide, Text } from '@halo-ds/react';

const courses = ['Design basics', 'Colour theory', 'Typography', 'Layout grids', 'Motion'];

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <Carousel aria-label="Courses" slidesPerView={3}>
        {courses.map((c) => (
          <CarouselSlide key={c}>
            <Card>
              <Text weight="semibold">{c}</Text>
              <Text size="sm" color="secondary">6 lessons</Text>
            </Card>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
}
