import type { Meta, StoryObj } from '@storybook/react-vite';
import { byCollection, Code, groupBy, Page, Section, styles, type Token } from './shared';

const semanticColors = byCollection('Semantic').filter((t) => t.type === 'color');

const cell = { padding: '10px 12px', borderBottom: '1px solid var(--halo-border-primary)', verticalAlign: 'middle' } as const;

function Row({ token }: { token: Token }) {
  const alias = (mode: string) => token.alias[mode]?.replace(/^(Primitives|Semantic)\//, '').replace('colours/', '');
  return (
    <tr>
      <td style={{ ...cell, width: 64 }}>
        <div
          style={{
            width: 48,
            height: 32,
            borderRadius: 6,
            background: `var(${token.cssVar})`,
            border: '1px solid var(--halo-border-secondary)',
          }}
        />
      </td>
      <td style={cell}>
        <div style={{ fontWeight: 600, fontSize: 14 }}>{token.name}</div>
        <Code>{token.cssVar}</Code>
      </td>
      {(['light', 'dark'] as const).map((mode) => (
        <td key={mode} style={cell}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, background: String(token.values[mode]), border: '1px solid var(--halo-border-secondary)' }} />
            <Code>{String(token.values[mode])}</Code>
          </div>
          <div style={styles.muted}>{alias(mode)}</div>
        </td>
      ))}
    </tr>
  );
}

function Colors() {
  const groups = groupBy(semanticColors, (t) => (t.name.startsWith('state/') ? t.name.split('/').slice(0, 2).join(' / ') : t.name.split('/')[0]!));
  return (
    <Page
      title="Colors"
      lead="Semantic color tokens. Always use these in components — never raw palette colors — so light and dark mode work automatically. Use the theme switcher in the toolbar to preview each mode."
    >
      {[...groups].map(([group, items]) => (
        <Section key={group} title={group}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ ...styles.muted, textAlign: 'left' }}>
                <th style={cell} />
                <th style={cell}>Token</th>
                <th style={cell}>Light</th>
                <th style={cell}>Dark</th>
              </tr>
            </thead>
            <tbody>
              {items.map((t) => (
                <Row key={t.name} token={t} />
              ))}
            </tbody>
          </table>
        </Section>
      ))}
    </Page>
  );
}

const meta: Meta = { title: 'Foundations/Colors', component: Colors, parameters: { layout: 'padded' } };
export default meta;
export const Semantic: StoryObj = {};
