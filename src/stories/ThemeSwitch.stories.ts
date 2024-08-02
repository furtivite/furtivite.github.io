import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitchBtn } from './ThemeSwitch';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof ThemeSwitchBtn> = {
  title: 'Example/ThemeSwitchBtn',
  component: ThemeSwitchBtn,
  tags: ['autodocs'],
};

export default meta;

export const ThemeSwitchBtnCode: Story = {};
