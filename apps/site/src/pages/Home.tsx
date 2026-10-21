import { useState } from 'react';
import type { CSSProperties } from 'react';
import {
  Avatar,
  Badge,
  Button,
  Calendar,
  Card,
  Checkbox,
  InputField,
  SegmentedControl,
  SelectField,
  Statistic,
  Switch,
  Tab,
  TabList,
  Tabs,
  useToast,
} from '@halo-ds/react';
import { ArrowRight, Code, FigmaLogo, Plugs } from '@phosphor-icons/react';
import { CodeBlock } from '../CodeBlock';
import { links, useRoute } from '../router';

/* Brand colours people can try on the live examples. Each sets the few variables a rebrand needs. */
const brands = [
  { name: 'Purple', main: '#CC1DD0', hover: '#B219B6', soft: '#FBEDFC', ring: '#F3C8F4', text: '#99169C' },
  { name: 'Blue', main: '#2F6BFF', hover: '#1F5FE0', soft: '#EAF1FF', ring: '#C9DAFF', text: '#1A4CC2' },
  { name: 'Green', main: '#178C4E', hover: '#11693A', soft: '#E8F7EF', ring: '#B9E6CE', text: '#11693A' },
  { name: 'Orange', main: '#E2601B', hover: '#C24F12', soft: '#FFF2EA', ring: '#FFD3B8', text: '#A9450F' },
];

const brandVars = (b: (typeof brands)[number]) =>
  ({
    '--halo-button-primary': b.main,
    '--halo-button-primary-hover': b.hover,
    '--halo-button-primary-pressed': b.hover,
    '--halo-fill-brand': b.main,
    '--halo-fill-brand-hover': b.hover,
    '--halo-border-contrast': b.main,
    '--halo-border-focus': b.ring,
    '--halo-surface-brand': b.soft,
    '--halo-surface-brand-contrast': b.hover,
    '--halo-text-brand': b.text,
  }) as CSSProperties;

function SignUp() {
  const { toast } = useToast();
  return (
    <Card className="demo-card">
      <form
        className="demo-form"
        onSubmit={(e) => {
          e.preventDefault();
          toast({ type: 'success', title: 'Account created', description: 'Check your email to confirm it.' });
        }}
      >
        <div>
          <h3 className="demo-title">Create your account</h3>
          <p className="demo-sub">Free for 14 days. No card needed.</p>
        </div>
        <InputField label="Work email" type="email" placeholder="name@company.com" />
        <SelectField
          label="Team size"
          placeholder="Choose one"
          options={[
            { value: '1', label: 'Just me' },
            { value: '10', label: '2 to 10' },
            { value: '50', label: '11 to 50' },
            { value: '51', label: 'More than 50' },
          ]}
        />
        <Checkbox label="Send me product updates" defaultChecked />
        <Button type="submit">Create account</Button>
      </form>
    </Card>
  );
}

function Numbers() {
  return (
    <Card className="demo-card">
      <div className="demo-stats">
        <Statistic label="Revenue" value={48920} prefix="$" change="+5.6%" trend="up" comparison="vs last month" />
        <Statistic label="Churn" value={2.3} precision={1} suffix="%" change="-0.4%" trend="down" sentiment="positive" comparison="vs last month" />
      </div>
    </Card>
  );
}

function Settings() {
  const [view, setView] = useState('week');
  return (
    <Card className="demo-card">
      <div className="demo-form">
        <h3 className="demo-title">Notifications</h3>
        <Switch label="New comments" description="When someone replies to you." defaultChecked />
        <Switch label="Weekly summary" description="Every Monday morning." />
        <SegmentedControl
          aria-label="Digest"
          fullWidth
          value={view}
          onValueChange={setView}
          options={[
            { value: 'day', label: 'Daily' },
            { value: 'week', label: 'Weekly' },
            { value: 'never', label: 'Never' },
          ]}
        />
      </div>
    </Card>
  );
}

function Team() {
  const people = [
    { name: 'Ada Obi', role: 'Owner', tone: 'brand' as const },
    { name: 'Kofi Mensah', role: 'Editor', tone: 'neutral' as const },
    { name: 'Lena Park', role: 'Viewer', tone: 'neutral' as const },
  ];
  return (
    <Card className="demo-card">
      <div className="demo-form">
        <Tabs defaultValue="members">
          <TabList aria-label="Team">
            <Tab value="members">Members</Tab>
            <Tab value="invites">Invites</Tab>
          </TabList>
        </Tabs>
        <ul className="demo-people">
          {people.map((p) => (
            <li key={p.name}>
              <Avatar size="sm" name={p.name} />
              <span className="demo-person">{p.name}</span>
              <Badge size="sm" color={p.tone}>{p.role}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function PickDate() {
  const [date, setDate] = useState<Date | null>(new Date());
  return <Calendar value={date} onChange={setDate} />;
}

const features = [
  {
    icon: <FigmaLogo />,
    title: 'Designed in Figma',
    text: 'Every component with its variants and states, plus colour, spacing and type variables for light and dark mode.',
  },
  {
    icon: <Code />,
    title: 'Built in React',
    text: 'TypeScript components that work with the keyboard and screen readers. Style any part of them with classes or CSS variables.',
  },
  {
    icon: <Plugs />,
    title: 'Kept in sync',
    text: 'Design and code share the same tokens and the same names, so what you design is what ships.',
  },
];

export function Home() {
  const { go } = useRoute();
  const [brand, setBrand] = useState(brands[0]!);
  return (
    <>
      <section className="hero">
        <Badge color="neutral" variant="outline" className="hero-badge">Free and open source</Badge>
        <h1>One design system for Figma and React.</h1>
        <p className="lede">
          Halo gives designers a Figma library and developers React components built from the same tokens. Start with sixty components, light and dark mode, and seven example apps.
        </p>
        <div className="hero-actions">
          <Button size="lg" iconRight={<ArrowRight />} onClick={() => go('/installation')}>Get started</Button>
          <Button size="lg" variant="secondary" onClick={() => go('/components')}>Browse components</Button>
          <Button size="lg" variant="ghost" iconLeft={<FigmaLogo />} onClick={() => window.open(links.figma, '_blank', 'noopener')}>Get the Figma file</Button>
        </div>
        <div className="hero-install">
          <CodeBlock code="npm install @halo-ds/react @halo-ds/tokens" label="Copy install command" compact />
        </div>
      </section>

      <section className="try" aria-labelledby="try-title">
        <div className="try-head">
          <div>
            <h2 id="try-title">Try it</h2>
            <p>These are the real components. Click around, then try your own brand colour.</p>
          </div>
          <div className="swatches" role="radiogroup" aria-label="Brand colour">
            {brands.map((b) => (
              <button
                key={b.name}
                type="button"
                role="radio"
                aria-checked={brand.name === b.name}
                aria-label={b.name}
                className="swatch"
                style={{ background: b.main }}
                onClick={() => setBrand(b)}
              />
            ))}
          </div>
        </div>
        <div className="demo-grid" style={brandVars(brand)}>
          <SignUp />
          <div className="demo-col">
            <Numbers />
            <Settings />
          </div>
          <div className="demo-col">
            <Card className="demo-card demo-calendar">
              <PickDate />
            </Card>
            <Team />
          </div>
        </div>
      </section>

      <section className="features" aria-label="What you get">
        {features.map((f) => (
          <div key={f.title} className="feature">
            <span className="feature-icon" aria-hidden="true">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </section>

      <section className="cta">
        <h2>Start building</h2>
        <p>Install the package, or grab the Figma file and start designing.</p>
        <div className="hero-actions">
          <Button iconRight={<ArrowRight />} onClick={() => go('/installation')}>Installation</Button>
          <Button variant="secondary" iconLeft={<FigmaLogo />} onClick={() => window.open(links.figma, '_blank', 'noopener')}>Figma file</Button>
        </div>
      </section>
    </>
  );
}
