import React from 'react';
import './App.css';
import { Context } from './Context';
import { Layout, Modal, ModalForm, ShortCard } from '../UI';
// Интерфейсы экспортируются отдельно
import { IShortCard } from '../UI/ShortCard/ShortCard';

export const App = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string | number | readonly string[]>('');

  const handleModalFormClick = (): void => {
    setIsModalOpen(true);
  };

  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const themeSwitchHandler = (): void => {
    if (theme === 'light') {
      setTheme('dark');
    } else setTheme('light');
  };

  const cards: IShortCard[] = [
    {
      categoryName: 'Транспорт',
      title: 'Шиномонтаж',
      price: 1500,
      description: 'Колесо монтаж',
    },
    {
      categoryName: 'Продукты',
      title: 'Ветчина',
      price: 500,
      description: 'Дикси',
    },
    {
      categoryName: 'Продукты',
      title: 'Что-то дорогое',
      price: 150000,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus, beatae illum eveniet aliquam, ipsum officia corporis culpa minima similique qui debitis illo minus enim magni fugiat laudantium officiis tempore aperiam quaerat dolorum!',
    },
  ];

  return (
    <Context.Provider value={{ theme, themeSwitchHandler }}>
      <Layout>
        <ModalForm inputValue={inputValue} setInputValue={setInputValue} handleModalFormClick={handleModalFormClick} />

        <Modal
          showModal={isModalOpen}
          title="Заголовок модального окна"
          closeHandler={() => {
            setIsModalOpen(false);
            setInputValue('');
          }}
          titleButton="Кнопка"
          onClickButton={() => console.log('КЛИК')}
        >
          <p>{inputValue}</p>
        </Modal>

        <div className="flex-column gap-16">
          {cards.map((item: IShortCard) => {
            const { title, categoryName, price, description } = item;
            return (
              <ShortCard
                key={title}
                categoryName={categoryName}
                price={price}
                description={description}
                title={title}
              />
            );
          })}
        </div>
      </Layout>
    </Context.Provider>
  );
};
