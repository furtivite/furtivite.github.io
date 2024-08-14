import React from 'react';
import './App.css';
import { Card, Layout } from '../UI';
// Интерфейсы импортируются отдельно
import { CardProps } from '../UI/Card/interfaces';
import { AppContext, defaultValue, IDefaultValue } from './Context';

export const App = (): React.ReactElement => {
  const [currentContext, setCurrentContext] = React.useState<IDefaultValue>(defaultValue);

  const cards: CardProps[] = [
    {
      title: 'Карточка',
      categoryName: 'Транспорт',
      price: 100,
      description: 'Описание',
      date: '2 мая 2015',
    },
    {
      title: 'Карточка 2',
      categoryName: 'Транспорт',
      price: 100,
      description: 'Описание',
      date: '2 мая 2015',
    },
  ];
  return (
    <AppContext.Provider value={currentContext}>
      <Layout>
        <div className="flex-column gap-10 container">
          {cards.map((item) => {
            const { title, categoryName, price, description, date } = item;
            return (
              <Card
                key={title}
                title={title}
                categoryName={categoryName}
                price={price}
                description={description}
                date={date}
              />
            );
          })}
        </div>
      </Layout>
    </AppContext.Provider>
  );
};
