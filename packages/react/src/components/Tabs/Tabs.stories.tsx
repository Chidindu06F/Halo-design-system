import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartBar, Gear, House, Users } from '@phosphor-icons/react';
import { Tab, TabList, TabPanel, Tabs } from './Tabs';
import type { TabsProps } from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { TabList, Tab, TabPanel },
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Switches between views in the same place. Arrow keys move between tabs and show the panel straight away; Home and End jump to the ends. Use `line` for page sections and `pill` for lighter switches inside a card.',
      },
    },
  },
  args: { variant: 'line', size: 'md', layout: 'horizontal', defaultValue: 'overview' },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

function Example(args: TabsProps) {
  return (
    <Tabs {...args}>
      <TabList aria-label="Project">
        <Tab value="overview" icon={<House />}>Overview</Tab>
        <Tab value="activity" icon={<ChartBar />}>Activity</Tab>
        <Tab value="members" icon={<Users />} badge={8}>Members</Tab>
        <Tab value="settings" icon={<Gear />} disabled>Settings</Tab>
      </TabList>
      <TabPanel value="overview">A summary of the project.</TabPanel>
      <TabPanel value="activity">Recent changes and comments.</TabPanel>
      <TabPanel value="members">People who can see this project.</TabPanel>
      <TabPanel value="settings">Project settings.</TabPanel>
    </Tabs>
  );
}

export const Playground: Story = { render: (args) => <Example {...args} /> };

/** A grey pill behind the selected tab. */
export const Pill: Story = { render: (args) => <Example {...args} variant="pill" /> };

/** Tabs share the full width. */
export const FullWidth: Story = { render: (args) => <div style={{ maxWidth: 520 }}><Example {...args} layout="fullWidth" /></div> };

/** The list sits on the left. Up and Down arrows move between tabs. */
export const Vertical: Story = { render: (args) => <Example {...args} layout="vertical" /> };

/** 32px tabs. */
export const Small: Story = { render: (args) => <Example {...args} size="sm" /> };
