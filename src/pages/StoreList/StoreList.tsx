import React from 'react';
import { goods } from '../../assets/goods';
import { Container, ShortCard } from '../../entities';
import { nanoid } from 'nanoid';

export const StoreList: React.FC = () => {
  const myGoods = goods;

  return (
    <Container>
      {myGoods.map((item) => (
        <ShortCard key={nanoid()} {...item} />
      ))}
    </Container>
  );
};
