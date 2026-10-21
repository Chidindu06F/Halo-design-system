import { Tab, TabList, TabPanel, Tabs } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <Tabs defaultValue="overview">
        <TabList aria-label="Project">
          <Tab value="overview">Overview</Tab>
          <Tab value="activity">Activity</Tab>
          <Tab value="settings">Settings</Tab>
        </TabList>
        <TabPanel value="overview" style={{ paddingTop: 16 }}>Everything about the project at a glance.</TabPanel>
        <TabPanel value="activity" style={{ paddingTop: 16 }}>Who changed what, and when.</TabPanel>
        <TabPanel value="settings" style={{ paddingTop: 16 }}>Name, members and permissions.</TabPanel>
      </Tabs>
    </div>
  );
}
