/**
 * Top bar
 * Links across the top for apps with a few main sections.
 */
import { useState } from 'react';
import { NavItem, TopBar } from '@halo-ds/react';

export default function Demo() {
  const [page, setPage] = useState('home');
  const item = (id: string, label: string) => (
    <NavItem selected={page === id} onClick={() => setPage(id)}>{label}</NavItem>
  );
  return (
    <div className="demo-panel" style={{ width: '100%', padding: 0, overflow: 'hidden' }}>
      <TopBar logo={<strong>Studio</strong>}>
        {item('home', 'Home')}
        {item('projects', 'Projects')}
        {item('reports', 'Reports')}
      </TopBar>
    </div>
  );
}
