import type { Meta } from '@storybook/react';
import { Modal } from '../entities';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

export const Visible = {
  args: {
    children: 'Some content',
    isVisible: true,
  },
};

export const Hidden = {
  args: {
    children: 'Some content',
    isVisible: false,
  },
};
