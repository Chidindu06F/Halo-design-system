/**
 * Status and badges
 * Presence on the bottom corner, and a second badge on the top.
 */
import { Avatar } from '@halo-ds/react';

export default function Demo() {
  return (
    <div className="demo-row">
      <Avatar size="xl" name="Zainab Bello" color="green" status="online" />
      <Avatar size="xl" name="Kemi Ade" color="blue" status="busy" topStatus="verified" />
      <Avatar size="xl" name="Tunde Ola" color="orange" award="champion" />
    </div>
  );
}
