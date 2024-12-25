import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { IGoodsItem } from './interfaces';
import { Btn, Counter, StockStatus } from '../../components';

export const CardDescription: React.FC<Partial<IGoodsItem>> = ({ title, isInStock, price, colors }) => {
  const [currentColor, setCurrentColor] = React.useState<string>(colors ? colors[0] : '');

  const changeColor = (color: string) => {
    setCurrentColor(color);
  };

  return (
    <div>
      <h1 className="mb-3 font-bold text-2xl text-b-900">{title}</h1>
      <StockStatus isInStock={isInStock} />
      <p className="mt-6 font-semibold text-lg text-b-900">${price}</p>
      <div className="mt-8">
        <p className="mb-[10px] font-medium text-xs leading-7 text-b-500 uppercase">Available Colors</p>
        <div className="flex gap-[10px]">
          {colors &&
            colors.map((item) => {
              const colorClass = clsx(
                'w-6',
                'aspect-square',
                'rounded-full',
                item,
                currentColor === item && 'outline outline-1 outline-b-900 outline-offset-2'
              );
              return (
                <button key={nanoid()} className={colorClass} onClick={() => changeColor(item)}>
                  <span className="sr-only">
                    Current color is {currentColor}. You choose {item}
                  </span>
                </button>
              );
            })}
        </div>
      </div>
      <div className="mt-8">
        <p className="mb-[10px] font-medium text-xs leading-7 text-b-500 uppercase">QUANTITY</p>
        <Counter counter={1} />
      </div>
      <div className="flex flex-col mt-10">
        <Btn isDisabled={!isInStock}>Add to cart</Btn>
        <p className="mt-3 font-medium text-xs leading-7 text-b-500 uppercase">
          &mdash;&nbsp;Free shipping on&nbsp;orders $100+
        </p>
      </div>
    </div>
  );
};
