import { Avatar, AvatarGroup } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ display: 'grid', gap: 24, justifyItems: 'center' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Avatar size="sm" name="Ada Obi" />
        <Avatar size="md" name="Kofi Mensah" status="online" />
        <Avatar size="lg" name="Lena Park" color="purple" />
      </div>
      <AvatarGroup max={3} total={8}>
        <Avatar name="Ada Obi" />
        <Avatar name="Kofi Mensah" />
        <Avatar name="Lena Park" />
        <Avatar name="Mateo Silva" />
      </AvatarGroup>
    </div>
  );
}
