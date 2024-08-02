import type { Meta, StoryObj } from '@storybook/react';

import { Btn } from './Btn';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Btn> = {
  title: 'Example/Btn',
  component: Btn,
  tags: ['autodocs'],
};

export default meta;

export const BtnCode: Story = {
  args: {
    text: 'Кнопка',
    onClick: () => console.log('КЛИК'),
    isDisabled: false,
  },
};
