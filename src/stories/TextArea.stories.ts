import type { Meta } from '@storybook/react';
import { TextArea } from '../shared';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  decorators: [],
  tags: ['autodocs'],
  title: 'UI/Inputs/TextArea',
};

export default meta;

export const Active = {
  args: {
    value: '',
    name: 'string',
    placeholder: 'Some placeholder',
    required: false,
    id: 'string',
    form: 'form',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    value: '',
    name: 'string',
    placeholder: 'Some placeholder',
    required: false,
    id: 'string',
    form: 'form',
    disabled: true,
  },
};
