import { useState } from 'react';
import { Button, SelectField } from '@halo-ds/react';
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
import { all, exampleFor } from '../registry';
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

// Short on purpose: each line stays within three lines on the card
const features = [
  { icon: <Rows />, title: 'Auto layout everywhere', text: 'Every component and screen resizes the way the code does.' },
  { icon: <PuzzlePiece />, title: 'Slots', text: 'Drop your own content into cards, modals and more without detaching.' },
  { icon: <Shapes />, title: 'Every value is a variable', text: 'Colour, spacing, radius, type and grids. Change the brand once, everything follows.' },
  { icon: <Moon />, title: 'Light and dark', text: 'Switch any frame between modes. Every component works in both.' },
  { icon: <Code />, title: 'Named like the code', text: 'Variants and properties match the React props, so handoff needs no translation.' },
  { icon: <BookOpenText />, title: 'Guidance per component', text: "Anatomy, states, when to use it, do's and don'ts and accessibility." },
  { icon: <Devices />, title: 'Seven example apps', text: 'About 200 desktop and mobile screens, from banking to healthcare.' },
  { icon: <Cube />, title: 'Assets included', text: 'Over 1,500 icons, plus illustrations, flags, logos and avatar faces.' },
];

const withGuide = all.filter((e) => guideFor(e.slug));

/** Pick a component, see it in a real UI, and read what it is for. */
function Picker() {
  const [slug, setSlug] = useState('textarea');
  const entry = withGuide.find((e) => e.slug === slug)!;
  const { guide, image } = guideFor(slug)!;
  const Live = guide.example ? null : exampleFor(slug)?.Example;
  return (
    <div className="picker">
      <div className="picker-side">
        <SelectField
          label="Component"
          value={slug}
          onValueChange={setSlug}
          options={withGuide.map((e) => ({ value: e.slug, label: e.name }))}
        />
        <Link to={`/figma/${slug}`} className="picker-more">
          Do's and don'ts for {entry.name} <ArrowRight aria-hidden="true" />
        </Link>
      </div>
      <figure className="picker-view">
        <div className="picker-frame">
          {guide.example ? (
            <img key={image} src={`${base}usage/${image}.webp`} alt={`${entry.name} in a real screen`} width={guide.example.width} height={guide.example.height} />
          ) : (
            Live && <div className="picker-live"><Live /></div>
          )}
        </div>
        <figcaption>{guide.callout}</figcaption>
      </figure>
    </div>
  );
}

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

      <section className="figma-section" id="guide" aria-labelledby="guide-title">
        <h2 id="guide-title">When to use what</h2>
        <p className="lede">Choose a component to see where it belongs in a real screen.</p>
        <Picker />
      </section>
    </div>
  );
}

function GuidePage({ entry }: { entry: Entry }) {
  const { guide, image } = guideFor(entry.slug)!;
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
