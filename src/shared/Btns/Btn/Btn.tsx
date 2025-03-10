import React from 'react';
import clsx from 'clsx';
import { IBtn } from '../../../shared/interfaces';
import { EThemeVariables, StoreContext } from '../../../app/StoreContext';

export const Btn: React.FC<IBtn> = ({ children, isDisabled, onClick, type }) => {
  const { theme } = React.useContext(StoreContext);
  const isDarkTheme = theme === EThemeVariables.DARK;

  const className = clsx(
    'px-6 py-[9.5px] font-inter text-sm leading-7 disabled:bg-b-600 rounded',
    isDarkTheme ? 'bg-w-900 text-b-900' : 'bg-b-900 text-w-900'
  );

  return (
    <button type={type === undefined ? 'button' : type} className={className} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};
