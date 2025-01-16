import React from 'react';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { IGoodsItem } from '../../../entities/interfaces';
import { CardImage, CardDescription } from '../../../entities';

export const FullCard: React.FC<IGoodsItem> = ({ title, price, details, imageFull, isInStock, colors, sizes }) => {
  const { t } = useTranslation();

  return (
    <div className="font-inter">
      <div className="grid grid-cols-2 gap-8">
        <CardImage imageFull={imageFull} />
        <CardDescription title={title} price={price} isInStock={isInStock} colors={colors} sizes={sizes} />
      </div>
      <h2 className="mb-6 font-bold text-base text-b-900">{t('card.details')}</h2>
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
};
