import type { Meta, StoryObj } from '@storybook/react';

import { Collapse } from '../UI/Collapse/Collapse';

const meta = {
  title: 'Example/Collapse',
  component: Collapse,
  tags: ['autodocs'],
} satisfies Meta<typeof Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'string',
    opened: false,
    onClick: () => null,
  },
};
