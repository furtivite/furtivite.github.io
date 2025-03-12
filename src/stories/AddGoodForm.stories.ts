import type { Meta } from '@storybook/react';
import { AddGoodForm } from '../features/forms';
import { IGoodsItem } from '../entities/interfaces';
import { goods } from '../assets/goods';

const meta: Meta<typeof AddGoodForm> = {
  title: 'Forms/AddGood',
  component: AddGoodForm,
  tags: ['autodocs'],
};

export default meta;

const newId = goods[goods.length - 1].id;

export const Default = {
  args: {
    newId: newId,
    onSubmit: (data: Partial<IGoodsItem>) => {
      console.log('Form :', data);
    },
  },
};
