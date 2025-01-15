import type { Meta } from '@storybook/react';
import { Layout } from 'src/entities';

const meta: Meta<typeof Layout> = {
  title: 'UI/Layout',
  component: Layout,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    children: 'Some content',
  },
};
