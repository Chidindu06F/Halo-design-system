import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { CompactButton, Drawer, NavItem, TopBar, Tooltip } from '@halo-ds/react';
import { GithubLogo, Moon, Sun } from '@phosphor-icons/react';
import { Link, links, useRoute } from './router';

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Halo, home">
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="12" cy="12" r="3.5" fill="var(--halo-fill-brand)" />
      </svg>
      <span>Halo</span>
    </Link>
  );
}

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('halo-site-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // Storage can be blocked; fall back to the system setting
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('halo-site-theme', theme);
    } catch {
      // Not saved; the choice still applies for this visit
    }
  }, [theme]);
  return [theme, setTheme] as const;
}

const pages = [
  { to: '/components', label: 'Components' },
  { to: '/installation', label: 'Installation' },
];

export function Layout({ children }: { children: ReactNode }) {
  const { path, go } = useRoute();
  const [theme, setTheme] = useTheme();
  const [menu, setMenu] = useState(false);
  const isOn = (to: string) => path === to || path.startsWith(to + '/');

  const actions = (
    <>
      <Tooltip content="GitHub">
        <CompactButton variant="ghost" aria-label="GitHub" onClick={() => window.open(links.github, '_blank', 'noopener')}>
          <GithubLogo />
        </CompactButton>
      </Tooltip>
      <Tooltip content={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
        <CompactButton variant="ghost" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </CompactButton>
      </Tooltip>
    </>
  );

  return (
    <div className="site">
      <a className="skip" href="#main">Skip to content</a>
      <TopBar className="site-bar" logo={<Logo />} actions={actions} onMenuClick={() => setMenu(true)}>
        {pages.map((p) => (
          <NavItem key={p.to} href={import.meta.env.BASE_URL.replace(/\/$/, '') + p.to} selected={isOn(p.to)} onClick={(e) => { e.preventDefault(); go(p.to); }}>
            {p.label}
          </NavItem>
        ))}
        <NavItem href={links.storybook}>Storybook</NavItem>
        <NavItem href={links.figma}>Figma</NavItem>
      </TopBar>
      <Drawer open={menu} onClose={() => setMenu(false)} side="left" size="sm" title={<Logo />}>
        <nav aria-label="Main" className="drawer-nav">
          {pages.map((p) => (
            <NavItem key={p.to} selected={isOn(p.to)} onClick={() => { setMenu(false); go(p.to); }}>
              {p.label}
            </NavItem>
          ))}
          <NavItem href={links.storybook}>Storybook</NavItem>
          <NavItem href={links.figma}>Figma</NavItem>
          <NavItem href={links.github}>GitHub</NavItem>
        </nav>
      </Drawer>
      <main id="main">{children}</main>
      <footer className="footer">
        <div className="footer-inner">
          <Logo />
          <p>Open source under the MIT licence. Built with its own components.</p>
          <nav aria-label="Footer" className="footer-links">
            <a href={links.github}>GitHub</a>
            <a href={links.npm}>npm</a>
            <a href={links.storybook}>Storybook</a>
            <a href={links.figma}>Figma</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
