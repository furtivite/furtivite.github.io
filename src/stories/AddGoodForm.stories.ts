import type { Meta } from '@storybook/react';
import { AddGoodForm } from '../features/forms';

const meta: Meta<typeof AddGoodForm> = {
  title: 'Forms/AddGood',
  component: AddGoodForm,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {},
};
