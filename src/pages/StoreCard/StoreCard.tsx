import React from 'react';
import { Container, FullCard } from '../../entities';
import { goods } from '../../assets/goods';

export const StoreCard: React.FC = () => {
  const item = goods[0];

  return (
    <Container>
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
    </Container>
  );
};
