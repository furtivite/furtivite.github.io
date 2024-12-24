import type { Meta } from '@storybook/react';
import { AddToCart } from '../components';

const meta: Meta<typeof AddToCart> = {
  title: 'UI/Btns/AddToCart',
  component: AddToCart,
  tags: ['autodocs'],
};

export default meta;

export const Empty = {
  args: {
    children: 'Add to cart',
  },
};

export const HasGoods = {
  args: {
    counter: 1,
  },
};
