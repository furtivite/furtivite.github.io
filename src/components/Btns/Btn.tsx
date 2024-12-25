import React from 'react';
import { IBtn } from './interfaces';

export const Btn: React.FC<IBtn> = ({ children, isDisabled }) => (
  <button
    className="px-6 py-[9.5px] font-inter text-sm leading-7 bg-b-900 text-w-900 disabled:bg-b-600 rounded"
    disabled={isDisabled}
  >
    {children}
  </button>
);
