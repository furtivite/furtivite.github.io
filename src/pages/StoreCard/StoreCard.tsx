import React from 'react';
import { FullCard } from '../../entities';
import { goods } from '../../assets/goods';

export const StoreCard: React.FC = () => {
  const item = goods[0];

  return (
    <div className="container mx-auto my-4 px-3">
      <FullCard
        id={item.id}
        title={item.title}
        price={item.price}
        details={item.details}
        imageListing={item.imageListing}
        imageFull={item.imageFull}
        isInStock={item.isInStock}
        colors={item.colors}
        sizes={item.sizes}
      />
    </div>
  );
};
