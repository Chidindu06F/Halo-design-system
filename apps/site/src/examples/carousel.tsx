import { Carousel, CarouselSlide } from '@halo-ds/react';

const slides = [
  { title: 'Plan', color: '#c9daff' },
  { title: 'Build', color: '#f3c8f4' },
  { title: 'Launch', color: '#b9e6ce' },
];

export default function Example() {
  return (
    <div style={{ width: '100%', maxWidth: 520 }}>
      <Carousel aria-label="Highlights">
        {slides.map((s) => (
          <CarouselSlide key={s.title}>
            <div style={{ display: 'grid', placeItems: 'center', aspectRatio: '16 / 9', borderRadius: 16, background: s.color, color: '#0c0c0c', fontSize: 24, fontWeight: 600 }}>
              {s.title}
            </div>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
}
