import type { Meta } from '@storybook/react';
import { AddToCart } from 'src/shared';

const meta: Meta<typeof AddToCart> = {
  title: 'UI/Btns/AddToCart',
  component: AddToCart,
  tags: ['autodocs'],
};

export default meta;

export const Empty = {
  args: {
    children: 'Add to cart',
    isDisabled: false,
  },
};

export const HasGoods = {
  args: {
    counter: 1,
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    children: 'Add to cart',
    isDisabled: true,
  },
};
