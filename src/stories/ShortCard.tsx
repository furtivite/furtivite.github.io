import React from 'react';

import './short-card.css';

interface ShortCardProps {
  categoryName: 'Транспорт' | 'Продукты';
  title: string;
  price: number;
  description: string;
}

/**
 * Компонет короткой карты
 */
export const ShortCard = ({ categoryName, title, price, description }: ShortCardProps): React.ReactElement => (
  <article className="card">
    <header className="flex">
      <div className="flex">
        <div className="category">
          <img
            width="20"
            height="20"
            src={
              categoryName === 'Транспорт'
                ? 'https://img.icons8.com/ios-filled/20/5b7cfa/car.png'
                : 'https://img.icons8.com/ios-filled/20/5b7cfa/fast-moving-consumer-goods.png'
            }
            alt=""
          />
          <span>{categoryName}</span>
        </div>
        <h1>{title}</h1>
      </div>
      <p>
        {price}
        <span>₽</span>
      </p>
    </header>
    <p>{description.slice(0, 100).slice(0, -3) + '...'}</p>
  </article>
);
