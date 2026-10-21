/**
 * Full width
 * The tabs share the full width, good for phones.
 */
import { Tab, TabList, Tabs } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <Tabs layout="fullWidth" defaultValue="all">
        <TabList aria-label="Messages">
          <Tab value="all">All</Tab>
          <Tab value="unread">Unread</Tab>
          <Tab value="sent">Sent</Tab>
        </TabList>
      </Tabs>
    </div>
  );
}
