import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';
import type { TextColor, TextSize, TextWeight } from './Text';

const sizes: TextSize[] = ['lg', 'md', 'sm'];
const weights: TextWeight[] = ['regular', 'semibold'];
const colors: TextColor[] = ['primary', 'contrast', 'secondary'];
const SAMPLE = 'Halo keeps body text clear and easy to read.';

const stack: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12 };
const card: CSSProperties = {
  width: 380,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 24,
  borderRadius: 20,
  border: '1px solid var(--halo-border-secondary)',
  background: 'var(--halo-surface-primary)',
};

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'One component for any paragraph or line of body text, built on the Body text styles and text colour tokens. Pick a size, weight and colour. For headings, use the heading styles instead.',
      },
    },
  },
  argTypes: {
    size: { control: 'inline-radio', options: sizes, table: { type: { summary: sizes.map((v) => `'${v}'`).join(' | ') } } },
    weight: { control: 'inline-radio', options: weights, table: { type: { summary: weights.map((v) => `'${v}'`).join(' | ') } } },
    color: { control: 'inline-radio', options: colors, table: { type: { summary: colors.map((v) => `'${v}'`).join(' | ') } } },
    as: { control: 'inline-radio', options: ['p', 'span', 'div', 'label', 'small'] },
    children: { control: 'text' },
  },
  args: { children: SAMPLE, size: 'md', weight: 'regular', color: 'primary' },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Try every option with the controls below. */
export const Playground: Story = {};

/** lg 16/24px for reading, md 14/22px for most interface text (default), sm 12/20px for captions and metadata. */
export const Sizes: Story = {
  render: () => <div style={stack}>{sizes.map((s) => <Text key={s} size={s}>{`${s}: ${SAMPLE}`}</Text>)}</div>,
};

/** Regular for reading; semibold for short emphasis like a name. */
export const Weights: Story = {
  render: () => <div style={stack}>{weights.map((w) => <Text key={w} weight={w}>{`${w}: ${SAMPLE}`}</Text>)}</div>,
};

/** Primary for main text, Contrast for descriptions, Secondary for captions and metadata. */
export const Colors: Story = {
  render: () => <div style={stack}>{colors.map((c) => <Text key={c} color={c}>{`${c}: ${SAMPLE}`}</Text>)}</div>,
};

/** A card and a list row built with Text. */
export const InUse: Story = {
  name: 'In use',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
      <div style={card}>
        <strong style={{ fontSize: 18, lineHeight: '26px', color: 'var(--halo-text-primary)' }}>Website redesign</strong>
        <Text color="contrast">New homepage, pricing page and onboarding flow, ready for review by Friday.</Text>
        <Text size="sm" color="secondary">Updated 2 hours ago · 4 comments</Text>
      </div>
      <div style={card}>
        {[['Ada Okafor', 'Product designer · Lagos'], ['Tunde Bello', 'Engineer · Abuja']].map(([n, d]) => (
          <div key={n}>
            <Text weight="semibold">{n}</Text>
            <Text size="sm" color="secondary">{d}</Text>
          </div>
        ))}
      </div>
    </div>
  ),
};
