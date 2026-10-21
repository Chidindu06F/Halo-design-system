/**
 * Variants
 * Small, with an icon, with an avatar, and disabled.
 */
import { Avatar, Tag } from '@halo-ds/react';
import { Hash } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Tag size="sm">Small</Tag>
      <Tag icon={<Hash />}>research</Tag>
      <Tag avatar={<Avatar size="xs" name="Ada Obi" color="purple" />}>Ada Obi</Tag>
      <Tag disabled onRemove={() => {}}>Disabled</Tag>
    </div>
  );
}
