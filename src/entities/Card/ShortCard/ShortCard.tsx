import React from 'react';
import { IGoodsItem } from '../../../entities/interfaces';
import { AddToCartBtn, StockStatus } from '../../../shared';

export const ShortCard: React.FC<IGoodsItem> = ({ isInStock, title, price, details, imageListing }) => (
  <article className="flex flex-col gap-3 max-w-[274px] font-inter px-[6px] py-4">
    <div className="min-h-[367px] rounded-sm overflow-hidden">
      <img src={imageListing} alt="" />
    </div>
    <AddToCartBtn counter={0} isDisabled={!isInStock}>
      Add to cart
    </AddToCartBtn>
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-sm leading-7">{title}</h1>
      <p className="text-sm truncate">{details[0]}</p>
      <div className="flex items-center gap-4">
        <StockStatus isInStock={isInStock} />
        <p className="text-sm text-b-600 leading-7">${price}</p>
      </div>
    </div>
  </article>
);
