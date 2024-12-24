import React from 'react';
import { IModal } from './interfaces';

export const Close = (): React.ReactElement => (
  <svg width="22" height="32" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11L6 21" stroke="#F6F6F6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 11L16 21" stroke="#F6F6F6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Modal = ({ isVisible, children }: IModal): React.ReactElement => {
  if (isVisible) {
    return (
      <div className="flex justify-center items-center min-h-dvh relative">
        <div className="w-full h-full bg-slate-900 opacity-40 absolute top-0 left-0"></div>
        <div className="w-fit max-w-72 bg-white opacity-1 relative">
          <button className="absolute -top-6 -right-6">
            <Close />
            <span className="sr-only">Close</span>
          </button>
          {children}
        </div>
      </div>
    );
  } else return <></>;
};
