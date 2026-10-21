/**
 * Pill
 * A grey pill behind the selected tab.
 */
import { Tab, TabList, Tabs } from '@halo-ds/react';

export default function Demo() {
  return (
    <Tabs variant="pill" defaultValue="overview">
      <TabList aria-label="Project">
        <Tab value="overview">Overview</Tab>
        <Tab value="activity">Activity</Tab>
        <Tab value="members" badge={8}>Members</Tab>
      </TabList>
    </Tabs>
  );
}
