import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { IBasketGoodsItem } from '../../../entities/interfaces';
import { Counter, DeleteBtn } from '../../../shared';

export const BasketGoodsItem: React.FC<IBasketGoodsItem> = ({ size, color, counter, title, price, image }) => {
  const colorClass = clsx('w-3 aspect-square rounded-full', color);
  const { t } = useTranslation();

  return (
    <article className="flex justify-between font-inter">
      <div className="flex items-center gap-8">
        <div className="flex justify-center items-center w-20 h-20 bg-w-100 rounded overflow-hidden">
          <img className="max-w-16" src={image} alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-sm text-b-900 leading-7">{title}</h1>
          <div className="flex items-baseline gap-2 font-medium text-xs text-b-500 leading-6">
            <p>{t('basket.color')}</p>
            <div className={colorClass} />
            <p>
              &nbsp;&mdash; {t('basket.size')}: <span className="uppercase">{size}</span>
            </p>
          </div>
        </div>
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
};
