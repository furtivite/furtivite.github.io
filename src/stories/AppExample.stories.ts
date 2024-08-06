import type { Meta, StoryObj } from '@storybook/react';

import { AppExample as AppExampleComponent } from './AppExample';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof AppExampleComponent> = {
  title: 'Example/AppExampleComponent',
  component: AppExampleComponent,
  tags: ['autodocs'],
};

export default meta;

export const Btn: Story = {
  args: {
    text: 'Кнопка',
    onClick: () => console.log('КЛИК'),
    isDisabled: false,
  },
};
