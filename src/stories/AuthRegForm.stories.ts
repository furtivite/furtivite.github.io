import type { Meta } from '@storybook/react';
import { AuthRegForm } from '../features/forms';
import { EAuthRegVariables } from '../features/forms/AuthRegForm';

const meta: Meta<typeof AuthRegForm> = {
  title: 'Forms/AuthRegForm',
  component: AuthRegForm,
  tags: ['autodocs'],
};

export default meta;

export const Registration = {
  args: {
    type: EAuthRegVariables.registration,
  },
};

export const Authorization = {
  args: {
    type: EAuthRegVariables.authorization,
  },
};
