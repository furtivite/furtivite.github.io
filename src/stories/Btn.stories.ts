import type { Meta } from '@storybook/react';
import { Btn } from '../components';

const meta: Meta<typeof Btn> = {
  title: 'UI/Btns/Btn',
  component: Btn,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    children: 'Subscribe',
  },
};
