import type { Meta, StoryObj } from '@storybook/react';

import { Header as HeaderComponent } from './Header';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof HeaderComponent> = {
  title: 'Example/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
};

export default meta;

export const Header: Story = {
  args: {
    isDark: false,
    themeSwitchHandler: null,
  },
};
