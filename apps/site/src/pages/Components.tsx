import { useEffect, useState } from 'react';
import { Badge, Input, LinkButton, SegmentedControl, Tab, TabList, TabPanel, Tabs } from '@halo-ds/react';
import { ArrowLeft, ArrowRight, Code, MagnifyingGlass } from '@phosphor-icons/react';
import { CodeBlock } from '../CodeBlock';
import { all, demosFor, exampleFor, groups } from '../registry';
import type { Demo, Entry } from '../registry';
import { apps } from '../screens';
import { Link, links, useRoute } from '../router';

const managers = { npm: 'npm install', pnpm: 'pnpm add', yarn: 'yarn add', bun: 'bun add' } as const;
type Manager = keyof typeof managers;

function Sidebar({ current }: { current?: string }) {
  const [q, setQ] = useState('');
  const match = (e: Entry) => e.name.toLowerCase().includes(q.trim().toLowerCase());
  return (
    <aside className="docs-side" aria-label="Components">
      <Input size="sm" aria-label="Search components" placeholder="Search" iconLeft={<MagnifyingGlass />} value={q} onChange={(e) => setQ(e.target.value)} />
      <nav className="docs-nav">
        {groups.map((g) => {
          const items = g.items.filter(match);
          if (!items.length) return null;
          return (
            <div key={g.name} className="docs-group">
              <p className="docs-group-name">{g.name}</p>
              {items.map((e) => (
                <Link key={e.slug} to={`/components/${e.slug}`} className="docs-link" aria-current={current === e.slug ? 'page' : undefined}>
                  {e.name}
                </Link>
              ))}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

function Overview() {
  return (
    <div className="docs-main">
      <header className="page-head">
        <p className="eyebrow">Components</p>
        <h1>Components</h1>
        <p className="lede">{all.length} components, each in Figma and in React. Pick one to see it live, copy the code, and find its full props in Storybook.</p>
      </header>
      {groups.map((g) => (
        <section key={g.name} className="overview-group" aria-labelledby={`g-${g.name}`}>
          <h2 id={`g-${g.name}`}>{g.name}</h2>
          <div className="overview-grid">
            {g.items.map((e) => (
              <Link key={e.slug} to={`/components/${e.slug}`} className="overview-card">
                <span className="overview-name">{e.name}</span>
                <span className="overview-desc">{e.description}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/** One labelled variant, like Ant Design's examples: the demo, what it shows, and its code on request. */
function DemoCard({ demo, slug }: { demo: Demo; slug: string }) {
  const [code, setCode] = useState(false);
  return (
    <section className="variant-card" aria-labelledby={`${slug}-${demo.id}`}>
      <div className="demo-preview">
        <demo.Demo />
      </div>
      <div className="demo-meta">
        <h3 id={`${slug}-${demo.id}`}>{demo.title}</h3>
        <p>{demo.description}</p>
        <LinkButton size="sm" iconLeft={<Code />} aria-expanded={code} onClick={() => setCode(!code)}>
          {code ? 'Hide code' : 'Show code'}
        </LinkButton>
      </div>
      {code && <CodeBlock code={demo.code} />}
    </section>
  );
}

/** Real screens from the example apps that use this component. */
function UsedIn({ slug }: { slug: string }) {
  const screens = apps.flatMap((a) => a.screens.filter((s) => s.components.includes(slug)).map((s) => ({ app: a, screen: s })));
  if (!screens.length) return null;
  const base = import.meta.env.BASE_URL;
  return (
    <section className="docs-section" aria-labelledby="used-in">
      <h2 id="used-in">Used in real screens</h2>
      <p>Where this component shows up in the example apps. Open one to see it full size, on desktop and mobile.</p>
      <div className="used-grid">
        {screens.slice(0, 6).map(({ app, screen }) => (
          <Link key={screen.id} to={`/examples/${app.id}#${screen.id}`} className="used-card">
            <img src={`${base}screens/${screen.id}-desktop.webp`} alt="" loading="lazy" width={screen.desktop[0]} height={screen.desktop[1]} />
            <span className="used-name">{app.name}</span>
            <span className="used-screen">{screen.name}</span>
          </Link>
        ))}
      </div>
      {screens.length > 6 && <p className="used-more">And {screens.length - 6} more in <Link to="/examples">Examples</Link>.</p>}
    </section>
  );
}

function Detail({ entry }: { entry: Entry }) {
  const [pm, setPm] = useState<Manager>('npm');
  const [tab, setTab] = useState('preview');
  const ex = exampleFor(entry.slug);
  const demos = demosFor(entry.slug);
  const i = all.indexOf(entry);
  const prev = all[i - 1];
  const next = all[i + 1];
  useEffect(() => setTab('preview'), [entry.slug]);
  const usage = `import { ${entry.exports.join(', ')} } from '@halo-ds/react';`;

  return (
    <div className="docs-main">
      <header className="page-head">
        <p className="eyebrow">Components</p>
        <h1>{entry.name}</h1>
        <p className="lede">{entry.description}</p>
        <div className="head-links">
          <a href={`${links.storybook}?path=/docs/${entry.storybook}`}>Props and more examples in Storybook</a>
          <a href={links.figma}>Figma</a>
        </div>
      </header>

      {ex ? (
        <Tabs value={tab} onValueChange={setTab}>
          <TabList aria-label="Example">
            <Tab value="preview">Preview</Tab>
            <Tab value="code">Code</Tab>
          </TabList>
          <TabPanel value="preview" className="preview">
            <ex.Example />
          </TabPanel>
          <TabPanel value="code" className="preview-code">
            <CodeBlock code={ex.code} />
          </TabPanel>
        </Tabs>
      ) : (
        <div className="preview preview-soon">
          <Badge color="neutral">Example coming soon</Badge>
        </div>
      )}

      {demos.length > 0 && (
        <section className="docs-section" aria-labelledby="examples">
          <h2 id="examples">Examples</h2>
          <div className="demo-list">
            {demos.map((d) => (
              <DemoCard key={`${entry.slug}-${d.id}`} demo={d} slug={entry.slug} />
            ))}
          </div>
        </section>
      )}

      <UsedIn slug={entry.slug} />

      <section className="docs-section" aria-labelledby="install">
        <h2 id="install">Installation</h2>
        <p>Every component comes in one package. Install it once.</p>
        <SegmentedControl aria-label="Package manager" size="sm" value={pm} onValueChange={(v) => setPm(v as Manager)} options={Object.keys(managers).map((m) => ({ value: m, label: m }))} />
        <CodeBlock code={`${managers[pm]} @halo-ds/react @halo-ds/tokens`} label="Copy command" />
        <p>
          First time? Add the styles once, as shown in <Link to="/installation">Installation</Link>.
        </p>
      </section>

      <section className="docs-section" aria-labelledby="usage">
        <h2 id="usage">Usage</h2>
        <CodeBlock code={usage} />
      </section>

      <nav className="pager" aria-label="More components">
        {prev ? (
          <Link to={`/components/${prev.slug}`} className="pager-link">
            <ArrowLeft aria-hidden="true" /> {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/components/${next.slug}`} className="pager-link pager-next">
            {next.name} <ArrowRight aria-hidden="true" />
          </Link>
        )}
      </nav>
    </div>
  );
}

export function Components() {
  const { path } = useRoute();
  const slug = path.replace(/^\/components\/?/, '');
  const entry = all.find((e) => e.slug === slug);
  return (
    <div className="docs">
      <Sidebar current={entry?.slug} />
      {entry ? <Detail entry={entry} /> : <Overview />}
    </div>
  );
}
