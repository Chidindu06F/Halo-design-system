import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code, Page, Section, styles, tokens, type Token } from './shared';

const pick = (collection: string, prefix: string) =>
  tokens.filter((t) => t.collection === collection && t.name.startsWith(prefix));
const value = (t: Token) => Number(Object.values(t.values)[0]);

function SpacingRow({ t }: { t: Token }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px 60px 1fr', alignItems: 'center', gap: 16, padding: '6px 0' }}>
      <Code>{t.cssVar}</Code>
      <span style={styles.muted}>{value(t)}px</span>
      <div style={{ height: 16, width: `var(${t.cssVar})`, background: 'var(--halo-surface-brand-contrast)', borderRadius: 2 }} />
    </div>
  );
}

function RadiusGrid({ items }: { items: Token[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {items.map((t) => (
        <div key={t.name} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: `var(${t.cssVar})`,
              background: 'var(--halo-surface-brand)',
              border: '2px solid var(--halo-border-contrast)',
            }}
          />
          <div style={{ marginTop: 6 }}>
            <Code>{t.cssVar.replace('--halo-', '')}</Code>
          </div>
          <div style={styles.muted}>{value(t)}px</div>
        </div>
      ))}
    </div>
  );
}

function SpacingRadius() {
  return (
    <Page
      title="Spacing & Radius"
      lead="Use the semantic sizes (xs–xl) in components. The numbered scale is available when you need a step in between."
    >
      <Section title="Spacing: semantic">
        {pick('Semantic', 'spacing/').map((t) => <SpacingRow key={t.name} t={t} />)}
      </Section>
      <Section title="Spacing: scale">
        {pick('Primitives', 'spacing/').map((t) => <SpacingRow key={t.name} t={t} />)}
      </Section>
      <Section title="Radius: semantic">
        <RadiusGrid items={pick('Semantic', 'radius/')} />
      </Section>
      <Section title="Radius: scale">
        <RadiusGrid items={pick('Primitives', 'radius/')} />
      </Section>
    </Page>
  );
}

const meta: Meta = { title: 'Foundations/Spacing & Radius', component: SpacingRadius, parameters: { layout: 'padded' } };
export default meta;
export const Scale: StoryObj = {};
