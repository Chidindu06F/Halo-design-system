import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowLeft, ArrowRight, ArrowSquareOut, DownloadSimple, Trash } from '@phosphor-icons/react';
import { Button } from '../Button';
import { LinkButton } from './LinkButton';
import type { LinkButtonSize, LinkButtonVariant } from './LinkButton';

const icons = { None: undefined, ArrowRight: <ArrowRight />, ArrowLeft: <ArrowLeft />, Download: <DownloadSimple />, Trash: <Trash />, External: <ArrowSquareOut /> };
const variants: LinkButtonVariant[] = ['primary', 'destructive'];
const sizes: LinkButtonSize[] = ['md', 'sm'];
const title = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const row: CSSProperties = { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 };
const caption: CSSProperties = { font: '500 13px/1.4 var(--halo-font-family-body)', color: 'var(--halo-text-secondary)' };
const card: CSSProperties = {
  width: 380,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  padding: 24,
  borderRadius: 20,
  border: '1px solid var(--halo-border-secondary)',
  background: 'var(--halo-surface-primary)',
  color: 'var(--halo-text-primary)',
  font: '400 14px/22px var(--halo-font-family-body)',
};
const field: CSSProperties = { padding: '10px 12px', borderRadius: 10, border: '1px solid var(--halo-border-secondary)' };

const meta = {
  title: 'Components/Link button',
  component: LinkButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A text-only button for navigation and low-emphasis actions: "Forgot password?", "View all", "Learn more". With `href` it renders a real link; without, a button. Hover and keyboard focus underline the label. Use a Button for the main action on a screen.',
      },
    },
  },
  argTypes: {
    variant: { control: 'inline-radio', options: variants, table: { type: { summary: variants.map((v) => `'${v}'`).join(' | ') } } },
    size: { control: 'inline-radio', options: sizes, table: { type: { summary: sizes.map((v) => `'${v}'`).join(' | ') } } },
    iconLeft: { control: 'select', options: Object.keys(icons), mapping: icons, table: { type: { summary: 'ReactNode' } } },
    iconRight: { control: 'select', options: Object.keys(icons), mapping: icons, table: { type: { summary: 'ReactNode' } } },
    href: { control: 'text', table: { type: { summary: 'string' } } },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: { children: 'View all', variant: 'primary', size: 'md', disabled: false, href: '#' },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Try every option with the controls below. */
export const Playground: Story = {};

/** Primary for almost everything; Destructive for low-emphasis actions that remove something. */
export const Types: Story = {
  render: () => (
    <div style={row}>
      <LinkButton href="#" iconRight={<ArrowRight />}>View all</LinkButton>
      <LinkButton href="#">Learn more</LinkButton>
      <LinkButton variant="destructive" iconLeft={<Trash />}>Remove</LinkButton>
      <LinkButton variant="destructive">Clear all</LinkButton>
    </div>
  ),
};

/** md is 14px with 20px icons (default); sm is 12px with 16px icons. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '120px repeat(2, max-content)', gap: '16px 32px', alignItems: 'center' }}>
      <span />
      {sizes.map((s) => <span key={s} style={caption}>{s}</span>)}
      {variants.map((v) => [
        <span key={v} style={{ ...caption, color: 'var(--halo-text-primary)' }}>{title(v)}</span>,
        ...sizes.map((s) => <LinkButton key={`${v}-${s}`} href="#" variant={v} size={s} iconRight={<ArrowRight />}>View all</LinkButton>),
      ])}
    </div>
  ),
};

/** Point at a link, or press Tab, to see the underline. Disabled links turn grey and can't be followed. */
export const States: Story = {
  render: () => (
    <div style={row}>
      {variants.map((v) => (
        <LinkButton key={v} href="#" variant={v} iconRight={<ArrowRight />}>{title(v)}</LinkButton>
      ))}
      {variants.map((v) => (
        <LinkButton key={`${v}-d`} href="#" variant={v} disabled iconRight={<ArrowRight />}>Disabled</LinkButton>
      ))}
    </div>
  ),
};

/** Icons are optional. An arrow suggests going somewhere; an "open" icon marks links that leave the site. */
export const WithIcons: Story = {
  name: 'With icons',
  render: () => (
    <div style={row}>
      <LinkButton href="#">Forgot password?</LinkButton>
      <LinkButton iconLeft={<DownloadSimple />}>Download report</LinkButton>
      <LinkButton href="#" iconLeft={<ArrowLeft />}>Back to projects</LinkButton>
      <LinkButton href="https://github.com/Chidindu06F/Halo-design-system" target="_blank" rel="noreferrer" iconRight={<ArrowSquareOut />}>
        Halo on GitHub (opens in new tab)
      </LinkButton>
    </div>
  ),
};

/** Link buttons on real screens: under a sign-in form, in a card header and in a list. */
export const InUse: Story = {
  name: 'In use',
  render: () => (
    <div style={{ ...row, alignItems: 'flex-start' }}>
      <div style={card}>
        <strong style={{ fontSize: 20, lineHeight: '28px' }}>Sign in</strong>
        <div style={field}>ada@halo.design</div>
        <div style={field}>••••••••</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <LinkButton href="#" size="sm">Forgot password?</LinkButton>
        </div>
        <Button>Sign in</Button>
      </div>
      <div style={card}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <strong style={{ flex: 1 }}>Recent projects</strong>
          <LinkButton href="#" iconRight={<ArrowRight />}>View all</LinkButton>
        </div>
        {['Website redesign', 'Mobile app', 'Brand guidelines'].map((p) => <span key={p}>{p}</span>)}
      </div>
      <div style={card}>
        <strong>Team members</strong>
        {['Tunde Bello', 'Mira Chen'].map((p) => (
          <div key={p} style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ flex: 1 }}>{p}</span>
            <LinkButton variant="destructive" size="sm">Remove</LinkButton>
          </div>
        ))}
      </div>
    </div>
  ),
};
