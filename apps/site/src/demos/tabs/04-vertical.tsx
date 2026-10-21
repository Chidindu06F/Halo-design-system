/**
 * Vertical
 * The list sits on the left. Up and Down arrows move between tabs.
 */
import { Tab, TabList, TabPanel, Tabs } from '@halo-ds/react';

export default function Demo() {
  return (
    <Tabs layout="vertical" defaultValue="profile">
      <TabList aria-label="Settings">
        <Tab value="profile">Profile</Tab>
        <Tab value="security">Security</Tab>
        <Tab value="billing">Billing</Tab>
      </TabList>
      <TabPanel value="profile" style={{ padding: 16 }}>Name, photo and bio.</TabPanel>
      <TabPanel value="security" style={{ padding: 16 }}>Password and two-step sign-in.</TabPanel>
      <TabPanel value="billing" style={{ padding: 16 }}>Plan, card and invoices.</TabPanel>
    </Tabs>
  );
}
