import type { Meta, StoryObj } from '@storybook/react';

import { LightModeBtn } from './LigthModeBtn';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof LightModeBtn> = {
  title: 'Example/LightModeBtn',
  component: LightModeBtn,
  tags: ['autodocs'],
};

export default meta;

export const LightModeBtnCode: Story = {};
