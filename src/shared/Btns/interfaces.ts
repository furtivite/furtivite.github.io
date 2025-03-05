import React from 'react';

export interface IBtnDefault {
  isDisabled?: boolean;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface IBtn extends IBtnDefault {
  // TEMP custom children then extends ILayout
  children: React.ReactNode | React.ReactNode[] | string;
}
