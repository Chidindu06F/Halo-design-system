/**
 * Illustration
 * Illustrations suit large empty states, like an inbox with nothing new.
 */
import { EmptyState, Illustration } from '@halo-ds/react';

export default function Demo() {
  return <EmptyState media={<Illustration name="all-caught-up" />} title="You're all caught up" description="New messages will show up here." />;
}
