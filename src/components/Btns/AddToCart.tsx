import React from 'react';
import { IBtn, ICounter } from '../interfaces';
import { Btn, Counter } from '../../components';

export const AddToCart = ({ isDisabled, counter, children }: IBtn & ICounter): React.ReactElement => {
  if (counter > 0) {
    return <Counter counter={counter} />;
  }
  return (
    <Btn isDisabled={isDisabled}>
      <div className="flex justify-center items-center gap-[6px]">
        {children}
        <img
          src="https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/add-to-cart.svg"
          alt=""
          width={25}
          height={24}
        />
      </div>
    </Btn>
  );
};
