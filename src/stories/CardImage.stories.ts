import type { Meta } from '@storybook/react';
import { CardImage } from 'src/entities/index';
import { goods } from 'src/assets/goods';

const meta: Meta<typeof CardImage> = {
  title: 'UI/Cards/components/CardImage',
  component: CardImage,
  tags: ['autodocs'],
};

export default meta;

const item = goods[0];

export const Default = {
  args: {
    imageFull: item.imageFull,
  },
};
