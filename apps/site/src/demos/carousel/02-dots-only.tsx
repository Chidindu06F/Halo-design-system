/**
 * Dots only
 * No arrows: people swipe or use the dots.
 */
import { Carousel, CarouselSlide } from '@halo-ds/react';

const slides = ['#c9daff', '#f3c8f4', '#b9e6ce'];

export default function Demo() {
  return (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <Carousel aria-label="Highlights" showArrows={false}>
        {slides.map((color, i) => (
          <CarouselSlide key={color}>
            <div style={{ display: 'grid', placeItems: 'center', aspectRatio: '16 / 9', borderRadius: 16, background: color, color: '#0c0c0c', fontWeight: 600 }}>
              Slide {i + 1}
            </div>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
}
