import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Halo Design System',
    brandImage: 'logo.svg',
    brandUrl: 'https://github.com/Chidindu06F/Halo-design-system',
    colorPrimary: '#C364C5',
    colorSecondary: '#924B94',
  }),
});
