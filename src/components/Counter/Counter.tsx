import React from 'react';
import { ICounter } from './interface';

const Plus = (): React.ReactElement => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5V15" stroke="#5C5F6A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10H15" stroke="#5C5F6A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Minus = (): React.ReactElement => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16675 10H14.1667" stroke="#5C5F6A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Counter = ({ counter }: ICounter): React.ReactElement => (
  <div className="min-w-[164px] max-w-fit min-h-[47px] flex justify-between items-center px-4 border-[1px] border-solid border-b-100 rounded font-inter text-sm text-b-800 leading-7">
    <button>
      <Minus />
      <span className="sr-only">Decrease</span>
    </button>
    {counter}
    <button>
      <Plus />
      <span className="sr-only">Increase</span>
    </button>
  </div>
);
