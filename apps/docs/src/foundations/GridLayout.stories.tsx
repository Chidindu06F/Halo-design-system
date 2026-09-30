import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { byCollection, Code, Page, Section, styles } from './shared';

const layout = byCollection('Layout');
const value = (name: string, mode: string) => layout.find((t) => t.name === name)?.values[mode];
const modes = ['mobile', 'tablet', 'desktop', 'wide'];
const ranges: Record<string, string> = { mobile: '0 to 599px', tablet: '600 to 1,023px', desktop: '1,024 to 1,439px', wide: '1,440px and up' };

const cell: CSSProperties = { padding: '12px', borderBottom: '1px solid var(--halo-border-primary)', textAlign: 'left' };

// The live grid uses only the CSS variables, so it changes at each breakpoint on its own.
const container: CSSProperties = {
  maxWidth: 'calc(var(--halo-container-max-width) + 2 * var(--halo-grid-margin))',
  margin: '0 auto',
  paddingInline: 'var(--halo-grid-margin)',
};
const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--halo-grid-columns), minmax(0, 1fr))',
  columnGap: 'var(--halo-grid-gutter)',
};
const column: CSSProperties = {
  height: 120,
  borderRadius: 8,
  background: 'var(--halo-surface-brand)',
  border: '1px solid var(--halo-border-contrast)',
};

function GridLayout() {
  return (
    <Page
      title="Grid & Layout"
      lead="A column grid that adapts at four breakpoints. Columns hold content, gutters separate columns, and margins keep content away from the screen edge. Content stops growing at 1,280px."
    >
      <Section title="Breakpoints">
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={styles.muted}>
              {['Breakpoint', 'Screen width', 'Columns', 'Gutter', 'Margin'].map((h) => (
                <th key={h} style={cell}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {modes.map((m) => (
              <tr key={m}>
                <td style={{ ...cell, fontWeight: 600, textTransform: 'capitalize' }}>{m}</td>
                <td style={cell}>{ranges[m]}</td>
                <td style={cell}><Code>{String(value('grid/columns', m))}</Code></td>
                <td style={cell}><Code>{String(value('grid/gutter', m))}px</Code></td>
                <td style={cell}><Code>{String(value('grid/margin', m))}px</Code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Live grid">
        <p style={styles.muted}>
          Resize the viewport (toolbar → viewport) to see the grid switch between 4, 8 and 12 columns.
        </p>
      </Section>
    </Page>
  );
}

function LiveGrid() {
  return (
    <div style={{ ...container, paddingBlock: 24 }}>
      <div style={gridStyle}>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="halo-grid-col" style={column} />
        ))}
      </div>
      <style>{`.halo-grid-col:nth-child(n + 5) { display: none; }
@media (min-width: 600px) { .halo-grid-col:nth-child(n + 5) { display: block; } .halo-grid-col:nth-child(n + 9) { display: none; } }
@media (min-width: 1024px) { .halo-grid-col:nth-child(n + 9) { display: block; } }`}</style>
    </div>
  );
}

function Usage() {
  return (
    <Page title="Using the grid in code" lead="The grid values are CSS variables, so any layout can use them.">
      <pre style={{ ...styles.code, background: 'var(--halo-surface-minimal)', padding: 24, borderRadius: 12, overflowX: 'auto' }}>{`.page {
  max-width: calc(var(--halo-container-max-width) + 2 * var(--halo-grid-margin));
  margin: 0 auto;
  padding-inline: var(--halo-grid-margin);
}

.page-grid {
  display: grid;
  grid-template-columns: repeat(var(--halo-grid-columns), minmax(0, 1fr));
  column-gap: var(--halo-grid-gutter);
}

/* Span whole columns, e.g. a sidebar and content on desktop */
.sidebar { grid-column: span 3; }
.content { grid-column: span 9; }`}</pre>
    </Page>
  );
}

const meta: Meta = { title: 'Foundations/Grid & Layout', component: GridLayout, parameters: { layout: 'padded' } };
export default meta;
export const Breakpoints: StoryObj = {};
export const Live: StoryObj = { render: () => <LiveGrid />, parameters: { layout: 'fullscreen' } };
export const InCode: StoryObj = { name: 'In code', render: () => <Usage /> };
