import React from 'react';
import { nanoid } from 'nanoid';
import { IGoodsItem } from './interfaces';
import { CardImage, CardDescription } from '../../components';

export const FullCard: React.FC<IGoodsItem> = ({ title, price, details, imageFull, isInStock, colors }) => (
  <div className="font-inter">
    <div className="grid grid-cols-2 gap-8">
      <CardImage imageFull={imageFull} />
      <CardDescription title={title} price={price} isInStock={isInStock} colors={colors} />
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
