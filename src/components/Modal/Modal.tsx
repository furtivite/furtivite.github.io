import React from 'react';
import { IModal } from './interfaces';

export const Modal: React.FC<IModal> = ({ isVisible, children }) => {
  if (isVisible) {
    return (
      <div className="flex justify-center items-center min-h-dvh relative">
        <div className="w-full h-full bg-b-900 opacity-40 absolute top-0 left-0"></div>
        <div className="w-fit max-w-72 bg-white opacity-1 relative">
          <button className="absolute -top-6 -right-6">
            <img
              src="https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/close-white.svg"
              alt=""
              width={22}
              height={32}
            />
            <span className="sr-only">Close</span>
          </button>
          <div className="bg-w-900 aspect-square">{children}</div>
        </div>
      </div>
    );
  } else return <></>;
};
