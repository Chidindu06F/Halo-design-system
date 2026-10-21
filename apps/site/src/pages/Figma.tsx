import { Button } from '@halo-ds/react';
import {
  ArrowRight,
  ArrowSquareOut,
  BookOpenText,
  Check,
  Code,
  Cube,
  Devices,
  FigmaLogo,
  Moon,
  PuzzlePiece,
  Rows,
  Shapes,
  X,
} from '@phosphor-icons/react';
import { guideFor } from '../guide';
import { all, groups } from '../registry';
import type { Entry } from '../registry';
import { Link, links, useRoute } from '../router';
import { Sidebar } from './Components';

const base = import.meta.env.BASE_URL;

// Counted from the Figma file
const stats = [
  { value: '116', label: 'Component sets' },
  { value: '2,111', label: 'Variants' },
  { value: '517', label: 'Properties' },
  { value: '287', label: 'Variables' },
];

const features = [
  { icon: <Rows />, title: 'Auto layout everywhere', text: 'Every component and example screen is built with auto layout, so it resizes the way the code does. Nothing to nudge by hand.' },
  { icon: <PuzzlePiece />, title: 'Slots', text: 'Cards, modals, drawers, accordions and more have slots. Drop your own content in without detaching, and keep getting updates.' },
  { icon: <Shapes />, title: 'Every value is a variable', text: 'Colour, spacing, radius, type and layout grids all come from variables. Change the brand colour once and every component follows.' },
  { icon: <Moon />, title: 'Light and dark', text: 'Switch a frame between light and dark mode. Every component is checked in both.' },
  { icon: <Code />, title: 'Named like the code', text: 'Variant and property names match the React props, and Dev Mode shows the import line, so handoff needs no translation.' },
  { icon: <BookOpenText />, title: 'A page of guidance per component', text: 'Anatomy, sizes, states, when to use it, do\'s and don\'ts, accessibility and the tokens it uses.' },
  { icon: <Devices />, title: 'Seven example apps', text: 'About 200 desktop and mobile screens: SaaS, banking, a sales CRM, tax, creators, healthcare and payroll.' },
  { icon: <Cube />, title: 'Assets included', text: 'Over 1,500 icons, illustrations, flags, company logos, emojis, awards and 90 ready-made avatar faces.' },
];

function Overview() {
  return (
    <div className="page figma-page">
      <header className="figma-hero">
        <div className="figma-hero-text">
          <p className="eyebrow">Figma library</p>
          <h1>Design with the same components you ship</h1>
          <p className="lede">
            The Figma library mirrors the React package piece for piece: the same names, the same variants and the same tokens. Duplicate it, set your brand colour, and design screens your developers can build as drawn.
          </p>
          <div className="hero-actions figma-actions">
            <Button iconLeft={<FigmaLogo />} iconRight={<ArrowSquareOut />} onClick={() => window.open(links.figma, '_blank', 'noopener')}>
              Get the Figma file
            </Button>
            <Button variant="secondary" iconRight={<ArrowRight />} onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}>
              When to use what
            </Button>
          </div>
        </div>
        <img className="figma-cover" src={`${base}figma/cover.webp`} alt="The cover of the Figma file" width={1600} height={900} />
      </header>

      <dl className="figma-stats">
        {stats.map((s) => (
          <div key={s.label}>
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>

      <section className="figma-section" aria-labelledby="inside">
        <h2 id="inside">What's inside</h2>
        <div className="feature-grid">
          {features.map((f) => (
            <div key={f.title} className="feature">
              <span className="feature-icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="figma-section figma-docs" aria-labelledby="docs">
        <div>
          <h2 id="docs">Documented in the file</h2>
          <p>
            Each component has its own page in Figma, written for the people who use it: what it is for, how it is built, which variant to pick, and the mistakes to avoid. The same guidance is below, so you can check it before you open the file.
          </p>
        </div>
        <img src={`${base}figma/doc-page.webp`} alt="The top of the Badge page in Figma: the intro and the anatomy" width={1400} height={1094} loading="lazy" />
      </section>

      <section className="figma-section" id="guide" aria-labelledby="guide-title">
        <h2 id="guide-title">When to use what</h2>
        <p className="lede">Pick a component to see it in context, the do's and don'ts, and how it compares with the ones that look like it.</p>
        {groups.map((g) => (
          <div key={g.name} className="guide-group">
            <h3>{g.name}</h3>
            <div className="guide-grid">
              {g.items.filter((e) => guideFor(e.slug)).map((e) => (
                <Link key={e.slug} to={`/figma/${e.slug}`} className="guide-card">
                  <span className="guide-name">{e.name}</span>
                  <span className="guide-callout">{guideFor(e.slug)!.guide.callout}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

function GuidePage({ entry }: { entry: Entry }) {
  const found = guideFor(entry.slug)!;
  const { guide, image } = found;
  const withGuide = all.filter((e) => guideFor(e.slug));
  const i = withGuide.indexOf(entry);
  const prev = withGuide[i - 1];
  const next = withGuide[i + 1];

  return (
    <div className="docs-main guide">
      <header className="page-head">
        <p className="eyebrow">When to use it</p>
        <h1>{entry.name}</h1>
        <p className="lede">{guide.callout}</p>
        <div className="head-links">
          <Link to={`/components/${entry.slug}`}>Code and examples</Link>
          <a href={links.figma} target="_blank" rel="noreferrer">Open in Figma</a>
        </div>
      </header>

      <div className="guide-about">
        {guide.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      {guide.example && (
        <section className="docs-section" aria-labelledby="in-use">
          <h2 id="in-use">In use</h2>
          <figure className="guide-example">
            <img src={`${base}usage/${image}.webp`} alt="" width={guide.example.width} height={guide.example.height} loading="lazy" />
            <figcaption>{guide.example.caption}</figcaption>
          </figure>
        </section>
      )}

      <section className="docs-section" aria-labelledby="dos">
        <h2 id="dos">Do's and don'ts</h2>
        <div className="dodont">
          <div className="dodont-card dodont-do">
            <h3><Check aria-hidden="true" weight="bold" /> Do</h3>
            <ul>{guide.dos.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="dodont-card dodont-dont">
            <h3><X aria-hidden="true" weight="bold" /> Don't</h3>
            <ul>{guide.donts.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      {guide.compare.map((c) => (
        <section key={c.title} className="docs-section" aria-label={c.title}>
          <h2>{c.title}</h2>
          {c.intro && <p>{c.intro}</p>}
          <div className="compare">
            {c.options.map((o) => (
              <div key={o.title} className="compare-card">
                <h3>{o.title}</h3>
                {o.points.length > 1 ? (
                  <ul>{o.points.map((t) => <li key={t}>{t}</li>)}</ul>
                ) : (
                  <p>{o.points[0]}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <nav className="pager" aria-label="More guides">
        {prev ? <Link to={`/figma/${prev.slug}`} className="pager-link">{prev.name}</Link> : <span />}
        {next && <Link to={`/figma/${next.slug}`} className="pager-link pager-next">{next.name}</Link>}
      </nav>
    </div>
  );
}

export function Figma() {
  const { path } = useRoute();
  const slug = path.replace(/^\/figma\/?/, '');
  const entry = all.find((e) => e.slug === slug && guideFor(e.slug));
  if (!entry) return <Overview />;
  return (
    <div className="docs">
      <Sidebar current={entry.slug} base="/figma" />
      <GuidePage entry={entry} />
    </div>
  );
}
