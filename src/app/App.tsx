import React from 'react';
import './i18n/config';
import './App.css';
import { Context, defaultContext, EThemeVariables, IContext } from './Context';
import { Layout, Modal, ModalForm, ShortCard } from '../UI';
// Интерфейсы экспортируются отдельно
import { IShortCard } from '../UI/ShortCard/ShortCard';
import { useTranslation } from 'react-i18next';

export const App = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string | number | readonly string[]>('');

  const handleModalFormClick = (): void => {
    setIsModalOpen(true);
  };

  const [contextValue, setContextValue] = React.useState<IContext>(defaultContext);
  const { theme, lang } = contextValue;

  const themeSwitchHandler = (): void => {
    if (theme === 'light') {
      setContextValue({ ...contextValue, theme: EThemeVariables.DARK });
    } else setContextValue({ ...contextValue, theme: EThemeVariables.LIGHT });
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

  const { t } = useTranslation('ns2');

  return (
    <Context.Provider value={{ theme, lang, themeSwitchHandler }}>
      <Layout>
        <p>{t('description.part1')}</p>
        <p>{t('description.part2')}</p>
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
