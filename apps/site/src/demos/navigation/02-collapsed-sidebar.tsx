/**
 * Collapsed sidebar
 * Icons only, to give the page more room. Groups open in a panel beside the bar.
 */
import { useState } from 'react';
import { NavGroup, NavItem, Sidebar } from '@halo-ds/react';
import { ChartBar, FolderSimple, House } from '@phosphor-icons/react';

export default function Demo() {
  const [page, setPage] = useState('home');
  const item = (id: string, label: string, icon?: React.ReactNode) => (
    <NavItem icon={icon} selected={page === id} onClick={() => setPage(id)}>{label}</NavItem>
  );
  return (
    <div style={{ height: 320, display: 'flex' }}>
      <Sidebar collapsed>
        {item('home', 'Home', <House />)}
        {item('projects', 'Projects', <FolderSimple />)}
        <NavGroup label="Reports" icon={<ChartBar />}>
          {item('sales', 'Sales')}
          {item('traffic', 'Traffic')}
        </NavGroup>
      </Sidebar>
    </div>
  );
}
