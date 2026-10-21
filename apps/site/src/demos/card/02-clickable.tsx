/**
 * Clickable
 * With href, the whole card is one link. Hover darkens the border, and keyboard focus shows a ring.
 */
import { Card, Text } from '@halo-ds/react';

const images = ['photo-1557672172-298e090bd0f1', 'photo-1618005182384-a83a8bd57fbe', 'photo-1604076913837-52ab5629fba9'];

export default function Demo() {
  return (
    <div className="demo-grid-3">
      {['Brand refresh', 'Mobile app', 'Annual report'].map((title, i) => (
        <Card key={title} href="#" media={<img src={`https://images.unsplash.com/${images[i]}?w=600&q=80`} alt="" />}>
          <Text weight="semibold">{title}</Text>
          <Text size="sm" color="secondary">Edited today</Text>
        </Card>
      ))}
    </div>
  );
}
