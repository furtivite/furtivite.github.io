import type { Meta } from '@storybook/react';
import { FullCard } from '../components/index';
import { goods } from '../assets/goods';

const meta: Meta<typeof FullCard> = {
  title: 'UI/Cards/FullCard',
  component: FullCard,
  tags: ['autodocs'],
};

export default meta;

const item = goods[0];

export const InStock = {
  args: {
    id: item.id,
    isInStock: true,
    title: item.title,
    details: item.details,
    price: item.price,
    imageFull: item.imageFull,
    colors: item.colors,
  },
};

export const OutOfStock = {
  args: {
    id: item.id,
    isInStock: false,
    title: item.title,
    details: item.details,
    price: item.price,
    imageFull: item.imageFull,
    colors: item.colors,
  },
};
