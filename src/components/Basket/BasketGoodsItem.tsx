import React from 'react';
import { ICounter, IGoodsItem } from '../interfaces';
import { Counter, DeleteBtn } from '../../components';

export const BasketGoodsItem: React.FC<ICounter & IGoodsItem> = ({ counter, title, price, imageListing }) => (
  <article className="flex justify-between font-inter">
    <div className="flex items-center gap-8">
      <div className="flex justify-center items-center w-20 h-20 border-[1px] border-solid border-b-500 rounded overflow-hidden">
        <img className="max-w-16" src={imageListing} alt="" />
      </div>
      <h1 className="font-semibold text-sm text-b-900 leading-7">{title}</h1>
    </div>
    <div className="flex justify-end items-center gap-8">
      <p className="font text-sm text-b-900 leading-7">${price}</p>
      <div className="flex gap-3">
        <Counter counter={counter} />
        <DeleteBtn />
      </div>
    </div>
  </article>
);
