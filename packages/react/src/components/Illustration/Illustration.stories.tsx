import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { EmptyState } from '../EmptyState';
import { Illustration } from './Illustration';
import { illustrationNames } from './art';

const meta = {
  title: 'Components/Illustration',
  component: Illustration,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Twenty spot illustrations for empty states, in white and greys with a soft purple accent so they never compete with buttons. Pass one to `EmptyState` through `media`. They follow light and dark mode, and seven variables recolour them: `--halo-illustration-backdrop`, `-surface`, `-outline`, `-detail`, `-shade`, `-accent` and `-accent-strong`. Set them on the page to change every illustration, or on one element to change just that one. Add `title` only when the picture says something the text next to it does not.',
      },
    },
  },
  args: { name: 'no-results', size: 160 },
  argTypes: { name: { control: 'select', options: illustrationNames } },
} satisfies Meta<typeof Illustration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const label = (n: string) => n.charAt(0).toUpperCase() + n.slice(1).replace(/-/g, ' ');

/** The full set. */
export const All: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 24 }}>
      {illustrationNames.map((n) => (
        <figure key={n} style={{ margin: 0, display: 'grid', justifyItems: 'center', gap: 8 }}>
          <Illustration name={n} />
          <figcaption style={{ font: '12px/18px var(--halo-font-family-body)', color: 'var(--halo-text-secondary)' }}>
            {label(n)} <code>{n}</code>
          </figcaption>
        </figure>
      ))}
    </div>
  ),
};

/** Inside an EmptyState. */
export const InEmptyState: Story = {
  render: () => (
    <EmptyState
      media={<Illustration name="no-projects" />}
      title="Start your first project"
      description="Projects keep your files, tasks and people in one place."
      actions={<Button>Create project</Button>}
    />
  ),
};

const presets: Record<string, CSSProperties> = {
  Default: {},
  Blue: { '--halo-illustration-accent': '#D6E4FF', '--halo-illustration-accent-strong': '#6E95F0' } as CSSProperties,
  Green: { '--halo-illustration-accent': '#D3F2E2', '--halo-illustration-accent-strong': '#4FB585' } as CSSProperties,
  Warm: {
    '--halo-illustration-backdrop': '#FBF3EA',
    '--halo-illustration-detail': '#F1E4D6',
    '--halo-illustration-shade': '#DCC6B0',
    '--halo-illustration-accent': '#FFD9BF',
    '--halo-illustration-accent-strong': '#F0975C',
  } as CSSProperties,
};

/** Recolour by setting the variables on a parent element. */
export const CustomColours: Story = {
  render: function Render() {
    const [preset, setPreset] = useState('Blue');
    return (
      <div style={{ display: 'grid', gap: 16 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {Object.keys(presets).map((p) => (
            <Button key={p} size="sm" variant={p === preset ? 'primary' : 'secondary'} onClick={() => setPreset(p)}>
              {p}
            </Button>
          ))}
        </div>
        <div style={{ ...presets[preset], display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {(['no-results', 'no-messages', 'all-caught-up', 'empty-cart'] as const).map((n) => (
            <Illustration key={n} name={n} />
          ))}
        </div>
      </div>
    );
  },
};
