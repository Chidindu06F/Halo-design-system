import type { Meta, StoryObj } from '@storybook/react-vite';
import { byCollection, Code, groupBy, Page, Section } from './shared';

const palette = byCollection('Primitives').filter((t) => t.type === 'color');

function Palette() {
  const families = groupBy(palette, (t) => t.name.split('/')[1]!);
  return (
    <Page
      title="Palette"
      lead="Primitive colors: the raw ramps that semantic tokens point to. Don't use these directly in components; they're hidden from Figma's pickers for the same reason."
    >
      {[...families].map(([family, ramp]) => (
        <Section key={family} title={family}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))', gap: 8 }}>
            {ramp.map((t) => (
              <div key={t.name}>
                <div
                  style={{
                    height: 56,
                    borderRadius: 8,
                    background: `var(${t.cssVar})`,
                    border: '1px solid var(--halo-border-secondary)',
                  }}
                />
                <div style={{ fontSize: 13, fontWeight: 600, marginTop: 6 }}>{t.name.split('/').pop()}</div>
                <Code>{String(t.values.default)}</Code>
              </div>
            ))}
          </div>
        </Section>
      ))}
    </Page>
  );
}

const meta: Meta = { title: 'Foundations/Palette', component: Palette, parameters: { layout: 'padded' } };
export default meta;
export const Primitives: StoryObj = {};
