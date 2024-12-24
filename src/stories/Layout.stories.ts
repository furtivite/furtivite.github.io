import type { Meta } from '@storybook/react';
import { Layout } from '../components';

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
