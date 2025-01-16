import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { EGoodsSizes, IGoodsItem } from '../../../entities/interfaces';
import { Btn, Counter, StockStatus } from '../../../shared';

export const CardDescription: React.FC<Partial<IGoodsItem>> = ({ title, isInStock, price, colors, sizes }) => {
  const [currentColor, setCurrentColor] = React.useState<string>(colors ? colors[0] : '');
  const [currentSize, setCurrentSize] = React.useState<EGoodsSizes>(sizes[0]);

  const { t } = useTranslation();

  const changeColor = (color: string) => {
    setCurrentColor(color);
  };

  const changeSize = (size: EGoodsSizes) => {
    setCurrentSize(size);
  };

  return (
    <div className="font-inter">
      <h1 className="mb-3 font-bold text-2xl text-b-900">{title}</h1>
      <StockStatus isInStock={isInStock} />
      <p className="mt-6 font-semibold text-lg text-b-900">${price}</p>
      <div className="mt-8">
        <p className="mb-[10px] font-medium text-xs leading-7 text-b-500 uppercase">{t('card.colors.title')}</p>
        <div className="flex gap-[10px]">
          {colors &&
            colors.map((item) => {
              const colorClass = clsx(
                'w-6 aspect-square rounded-full',
                item,
                currentColor === item && 'outline outline-1 outline-b-900 outline-offset-2'
              );
              return (
                <button key={nanoid()} className={colorClass} onClick={() => changeColor(item)}>
                  <span className="sr-only">
                    {t('card.colors.current')} {currentColor}. {t('card.colors.choose')} {item}
                  </span>
                </button>
              );
            })}
        </div>
      </div>
      <div className="mt-8">
        <p className="mb-[10px] font-medium text-xs leading-7 text-b-500 uppercase">{t('card.sizes.title')}</p>
        <div className="flex gap-[10px]">
          {sizes &&
            sizes.map((item) => {
              const sizeClass = clsx(
                'w-10 aspect-square border-[1px] border-solid',
                currentSize === item ? 'border-b-900 text-b-900' : 'border-b-100 text-b-500',
                'rounded font-medium text-xs leading-6 uppercase'
              );
              return (
                <button key={nanoid()} className={sizeClass} onClick={() => changeSize(item)}>
                  <span className="sr-only">
                    {t('card.sizes.current')} {currentSize}. {t('card.sizes.choose')}
                  </span>
                  {item}
                </button>
              );
            })}
        </div>
      </div>
      <div className="mt-8">
        <p className="mb-[10px] font-medium text-xs leading-7 text-b-500 uppercase">{t('card.quantity')}</p>
        <Counter counter={1} />
      </div>
      <div className="flex flex-col mt-10">
        <Btn isDisabled={!isInStock}>Add to cart</Btn>
        <p className="mt-3 font-medium text-xs leading-7 text-b-500 uppercase">{t('card.offer')}</p>
      </div>
    </div>
  );
};
