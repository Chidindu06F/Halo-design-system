import { useState } from 'react';
import { NavGroup, NavItem, Sidebar } from '@halo-ds/react';
import { ChartBar, FolderSimple, Gear, House, Users } from '@phosphor-icons/react';

export default function Example() {
  const [page, setPage] = useState('home');
  const item = (id: string, label: string, icon?: React.ReactNode) => (
    <NavItem icon={icon} selected={page === id} onClick={() => setPage(id)}>{label}</NavItem>
  );
  return (
    <div style={{ height: 420, display: 'flex', borderRadius: 16, overflow: 'hidden', boxShadow: 'inset 0 0 0 1px var(--halo-border-secondary)' }}>
      <Sidebar header={<strong>Studio</strong>} footer={item('settings', 'Settings', <Gear />)}>
        {item('home', 'Home', <House />)}
        {item('projects', 'Projects', <FolderSimple />)}
        <NavGroup label="Reports" icon={<ChartBar />}>
          {item('sales', 'Sales')}
          {item('traffic', 'Traffic')}
        </NavGroup>
        {item('team', 'Team', <Users />)}
      </Sidebar>
    </div>
  );
}
