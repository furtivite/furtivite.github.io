import React from 'react';

export interface IBtnDefault {
  isDisabled?: boolean;
}

export interface IBtn extends IBtnDefault {
  // TEMP custom children then extends ILayout
  children: React.JSX.Element | React.JSX.Element[] | string;
}
