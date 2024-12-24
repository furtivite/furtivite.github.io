import React from 'react';
import { nanoid } from 'nanoid';
import { IGoodsItem } from './interfaces';
import { Btn, Counter, StockStatus } from '../../components';

export const FullCard = ({ title, price, details, imageFull, isInStock }: IGoodsItem): React.ReactElement => (
  <div className="font-inter">
    <div className="grid grid-cols-2">
      {/* TEMP ONLY FIRST IMAGE */}
      <img src={imageFull[0]} alt="" />
      <div>
        <h1 className="mb-3 font-bold text-2xl text-b-900">{title}</h1>
        <StockStatus isInStock={isInStock} />
        <p className="mt-6 font-semibold text-lg text-b-900">${price}</p>
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
    </div>
    <h2 className="mb-6 font-bold text-base text-b-900">Details</h2>
    {typeof details === 'string' ? (
      <p className="text-sm text-b-500 leading-7">{details}</p>
    ) : (
      details.map((item) => (
        <p key={nanoid()} className="text-sm text-b-500 leading-7">
          {item}
        </p>
      ))
    )}
  </div>
);
