/**
 * Small
 * 32px tabs for dense panels.
 */
import { Tab, TabList, Tabs } from '@halo-ds/react';

export default function Demo() {
  return (
    <Tabs size="sm" defaultValue="day">
      <TabList aria-label="Range">
        <Tab value="day">Day</Tab>
        <Tab value="week">Week</Tab>
        <Tab value="month">Month</Tab>
      </TabList>
    </Tabs>
  );
}
