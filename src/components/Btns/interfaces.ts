import React from 'react';

export interface IBtn {
  // TEMP custom children then extends ILayout
  children: React.JSX.Element | React.JSX.Element[] | string;
  isDisabled: boolean;
}
