import type { Meta } from '@storybook/react';
import { Collapse } from '../shared';

const meta: Meta<typeof Collapse> = {
  title: 'UI/Collapse',
  component: Collapse,
  tags: ['autodocs'],
};

export default meta;

export const Closed = {
  args: {
    showenText: 'Some text...',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum metus at felis eleifend, at ornare lacus scelerisque. Praesent arcu mi, suscipit eu rhoncus ut, finibus a elit. Nulla finibus nisi orci. Sed vestibulum lectus ac semper porta. Proin et pharetra ipsum. Nulla vitae sem ut libero bibendum ultrices sit amet varius ipsum. Phasellus et ultrices orci. Nam pretium, erat ut ornare porta, nunc nulla vulputate dolor, ut hendrerit justo massa sed lorem. ',
  },
};
