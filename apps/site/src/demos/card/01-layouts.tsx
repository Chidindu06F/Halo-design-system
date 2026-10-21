/**
 * Layouts
 * With an image, text only, and with badges. Cards hold any content.
 */
import { Badge, Card, Text } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-grid-3">
      <Card media={<img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80" alt="" />}>
        <Text size="lg" weight="semibold">Night sky wallpapers</Text>
        <Text color="secondary">A set of 12 abstract backgrounds.</Text>
      </Card>
      <Card>
        <Text size="lg" weight="semibold">Q4 roadmap</Text>
        <Text color="secondary">Plans and goals for the next three months.</Text>
      </Card>
      <Card>
        <div style={{ display: 'flex', gap: 8 }}>
          <Badge size="sm" color="brand" variant="solid">New</Badge>
          <Badge size="sm">5 min read</Badge>
        </div>
        <Text size="lg" weight="semibold">Designing with colour</Text>
        <Text color="secondary">Build a palette that works in light and dark mode.</Text>
      </Card>
    </div>
  );
}
