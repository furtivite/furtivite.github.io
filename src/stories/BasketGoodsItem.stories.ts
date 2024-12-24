import type { Meta } from '@storybook/react';
import { BasketGoodsItem } from '../components/index';
import { goods } from '../assets/goods';

const meta: Meta<typeof BasketGoodsItem> = {
  title: 'UI/Basket/BasketGoodsItem',
  component: BasketGoodsItem,
  tags: ['autodocs'],
};

export default meta;

const item = goods[0];

export const Default = {
  args: {
    id: item.id,
    isInStock: true,
    title: item.title,
    details: item.details,
    price: item.price,
    imageListing: item.imageListing,
    counter: 1,
  },
};
