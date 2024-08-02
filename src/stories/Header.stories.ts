import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

export const HeaderCode: Story = {};
