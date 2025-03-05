import type { Meta } from '@storybook/react';
import { ProfileForm } from '../features/forms';

const meta: Meta<typeof ProfileForm> = {
  title: 'Forms/ProfileForm',
  component: ProfileForm,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {},
};
