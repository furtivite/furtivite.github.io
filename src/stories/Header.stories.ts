import type { Meta } from '@storybook/react';
import { Header } from '../entities';

const meta: Meta<typeof Header> = {
  title: 'UI/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {},
};
