import React from 'react';
import { goods } from '../../assets/goods';
import { Container, ShortCard } from '../../entities';
import { nanoid } from 'nanoid';

export const StoreList: React.FC = () => {
  const myGoods = goods;

  return (
    <Container>
      <ul className="grid grid-cols-3">
        {myGoods.map((item) => (
          <li key={nanoid()}>
            <ShortCard {...item} />
          </li>
        ))}
      </ul>
    </Container>
  );
};
