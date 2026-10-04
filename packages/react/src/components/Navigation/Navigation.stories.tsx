import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bell, CalendarBlank, ChartBar, CheckSquare, DotsThree, FolderSimple, Gear, House, MagnifyingGlass, Question, Users } from '@phosphor-icons/react';
import { Avatar } from '../Avatar';
import { CompactButton } from '../CompactButton';
import { Input } from '../Input';
import { Text } from '../Text';
import { NavItem, Sidebar, TopBar } from './Navigation';

const meta = {
  title: 'Components/Navigation',
  component: Sidebar,
  subcomponents: { NavItem, TopBar },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'App navigation. `Sidebar` runs down the left and can collapse to icons, showing labels as tooltips. `TopBar` runs across the top; its links hide on small screens, where `onMenuClick` shows a menu button. Mark the current page with `selected`, which sets `aria-current="page"`.',
      },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const pages = [
  { id: 'home', label: 'Home', icon: <House /> },
  { id: 'projects', label: 'Projects', icon: <FolderSimple /> },
  { id: 'tasks', label: 'Tasks', icon: <CheckSquare />, badge: 8 },
  { id: 'calendar', label: 'Calendar', icon: <CalendarBlank /> },
  { id: 'reports', label: 'Reports', icon: <ChartBar /> },
  { id: 'team', label: 'Team', icon: <Users /> },
];

export const SidebarStory: Story = {
  name: 'Sidebar',
  render: function Render() {
    const [page, setPage] = useState('home');
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div style={{ height: '100vh', minHeight: 600, display: 'flex' }}>
        <Sidebar
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          header={
            <>
              <Avatar size="sm" initials="ST" color="purple" />
              <Text weight="semibold" as="span">Studio</Text>
            </>
          }
          footer={
            <>
              <NavItem icon={<Gear />} onClick={() => setPage('settings')} selected={page === 'settings'}>Settings</NavItem>
              <NavItem icon={<Question />} onClick={() => setPage('help')} selected={page === 'help'}>Help</NavItem>
            </>
          }
          user={
            <>
              <Avatar size="sm" name="Ada Obi" />
              {!collapsed && (
                <>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Text as="div">Ada Obi</Text>
                    <Text as="div" size="sm" color="secondary">ada@example.com</Text>
                  </div>
                  <CompactButton variant="ghost" aria-label="Account options">
                    <DotsThree />
                  </CompactButton>
                </>
              )}
            </>
          }
        >
          {pages.map((p) => (
            <NavItem key={p.id} icon={p.icon} badge={p.badge} selected={page === p.id} onClick={() => setPage(p.id)}>
              {p.label}
            </NavItem>
          ))}
        </Sidebar>
      </div>
    );
  },
};

export const TopBarStory: Story = {
  name: 'Top bar',
  render: function Render() {
    const [page, setPage] = useState('overview');
    return (
      <TopBar
        onMenuClick={() => {}}
        logo={
          <>
            <Avatar size="sm" initials="ST" color="purple" />
            <Text weight="semibold" as="span">Studio</Text>
          </>
        }
        actions={
          <>
            <Input size="sm" aria-label="Search" placeholder="Search" iconLeft={<MagnifyingGlass />} style={{ width: 240 }} />
            <CompactButton variant="ghost" aria-label="Notifications">
              <Bell />
            </CompactButton>
            <Avatar size="sm" name="Ada Obi" />
          </>
        }
      >
        {['overview', 'projects', 'reports', 'team'].map((p) => (
          <NavItem key={p} selected={page === p} onClick={() => setPage(p)}>
            {p[0]!.toUpperCase() + p.slice(1)}
          </NavItem>
        ))}
      </TopBar>
    );
  },
};
