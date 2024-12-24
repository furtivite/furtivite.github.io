import React from 'react';
import { IBtnDefault } from './interfaces';

export const DeleteBtn = ({ isDisabled }: IBtnDefault): React.ReactElement => (
  <button
    className="flex justify-center items-center p-[10px] bg-b-100 disabled:bg-w-900 disabled:border-[1px] disabled:border-solid disabled:border-b-100 rounded"
    disabled={isDisabled}
  >
    <img
      src="https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/close.svg"
      alt=""
      width={20}
      height={20}
    />
    <span className="sr-only">Delete item</span>
  </button>
);
