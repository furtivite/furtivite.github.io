import type { Meta } from '@storybook/react';
import { Counter } from '../components';

const meta: Meta<typeof Counter> = {
  title: 'UI/Counter',
  component: Counter,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    counter: 0,
  },
};
