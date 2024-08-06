import type { Meta } from '@storybook/react';

import { Logo as LogoComponent } from './Logo';

const meta: Meta<typeof LogoComponent> = {
  title: 'Example/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
};

export default meta;

export const Logo = {
  args: {
    onDark: false,
  },
};
