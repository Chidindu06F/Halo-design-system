import { useEffect } from 'react';
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
import { all } from '../registry';
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

function Overview({ entry }: { entry: Entry }) {
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
        <img
          className="figma-shot"
          src={`${base}figma/figma-ui.webp`}
          alt="The Figma file open on a banking dashboard built from the components, with a Button selected and its properties in the right panel"
          width={1920}
          height={1034}
        />
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
        <p className="lede">Pick a component to see where it belongs in a real screen, and the mistakes to avoid.</p>
        <div className="docs figma-guide">
          <Sidebar current={entry.slug} base="/figma" />
          <GuidePage entry={entry} />
        </div>
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
        <h2 className="guide-title">{entry.name}</h2>
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
          <h3 id="in-use" className="guide-h">In use</h3>
          <figure className="guide-example">
            <img src={`${base}usage/${image}.webp`} alt="" width={guide.example.width} height={guide.example.height} loading="lazy" />
            <figcaption>{guide.example.caption}</figcaption>
          </figure>
        </section>
      )}

      <section className="docs-section" aria-labelledby="dos">
        <h3 id="dos" className="guide-h">Do's and don'ts</h3>
        <div className="dodont">
          <div className="dodont-card dodont-do">
            <h4><Check aria-hidden="true" weight="bold" /> Do</h4>
            <ul>{guide.dos.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="dodont-card dodont-dont">
            <h4><X aria-hidden="true" weight="bold" /> Don't</h4>
            <ul>{guide.donts.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      {guide.compare.map((c) => (
        <section key={c.title} className="docs-section" aria-label={c.title}>
          <h3 className="guide-h">{c.title}</h3>
          {c.intro && <p>{c.intro}</p>}
          <div className="compare">
            {c.options.map((o) => (
              <div key={o.title} className="compare-card">
                <h4>{o.title}</h4>
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
  const entry = withGuide.find((e) => e.slug === slug) ?? withGuide[0]!;
  // Picking a component in the guide list scrolls back to the guide, not to the top of the page
  useEffect(() => {
    if (slug) document.getElementById('guide')?.scrollIntoView({ block: 'start' });
  }, [slug]);
  return <Overview entry={entry} />;
}
