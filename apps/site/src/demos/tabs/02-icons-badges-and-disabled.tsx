/**
 * Icons, badges and disabled
 * An icon before the label, a count after it, and a tab that can not be chosen yet.
 */
import { Tab, TabList, Tabs } from '@halo-ds/react';
import { ChartBar, Gear, House, Users } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <Tabs defaultValue="overview">
      <TabList aria-label="Project">
        <Tab value="overview" icon={<House />}>Overview</Tab>
        <Tab value="activity" icon={<ChartBar />}>Activity</Tab>
        <Tab value="members" icon={<Users />} badge={8}>Members</Tab>
        <Tab value="settings" icon={<Gear />} disabled>Settings</Tab>
      </TabList>
    </Tabs>
  );
}
