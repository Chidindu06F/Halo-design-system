import figma from '@figma/code-connect';
import { NavGroup, NavItem, Sidebar, TopBar } from '@halo-ds/react';
import { ChartBar } from '@phosphor-icons/react';

figma.connect(NavItem, 'https://www.figma.com/design/LVZSmXHpIl0qR5fKYzzLrK/Halo?node-id=10232-224', {
  example: () => <NavItem />,
});

figma.connect(Sidebar, 'https://www.figma.com/design/LVZSmXHpIl0qR5fKYzzLrK/Halo?node-id=10233-277', {
  example: () => <Sidebar />,
});

figma.connect(TopBar, 'https://www.figma.com/design/LVZSmXHpIl0qR5fKYzzLrK/Halo?node-id=10233-407', {
  example: () => <TopBar />,
});

figma.connect(NavGroup, 'https://www.figma.com/design/LVZSmXHpIl0qR5fKYzzLrK/Halo?node-id=10622-90730', {
  example: () => (
    <NavGroup label="Reports" icon={<ChartBar />}>
      <NavItem selected>Sales</NavItem>
      <NavItem>Traffic</NavItem>
    </NavGroup>
  ),
});
