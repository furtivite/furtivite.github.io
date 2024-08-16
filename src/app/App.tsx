import React from 'react';
import './i18n/config';
import { useTranslation } from 'react-i18next';
import './App.css';
import { Context, defaultContext, EThemeVariables, IContext } from './Context';
import { Btn, Layout, Modal, ModalForm, ShortCard } from '../UI';
// Интерфейсы экспортируются отдельно
import { IShortCard } from '../UI/ShortCard/ShortCard';
import { createPortal } from 'react-dom';
import { defaultCards } from './data';
import { randomNumberGenerator, newCardGenerator } from '../features';

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

  const { t } = useTranslation();

  const [cards, setCards] = React.useState<IShortCard[]>(defaultCards);

  const handleShowMore = (): void => {
    const random = randomNumberGenerator(999, 1);
    setCards([...cards, newCardGenerator(random)]);
  };

  return (
    <Context.Provider value={{ theme, lang, themeSwitchHandler }}>
      <Layout>
        <p>{t('appDesc')}</p>
        <ModalForm inputValue={inputValue} setInputValue={setInputValue} handleModalFormClick={handleModalFormClick} />

        {createPortal(
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
          </Modal>,
          document.body
        )}

        <div className="flex-column gap-16 margin-bottom-24">
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
        <Btn text={t('buttons.showMore')} onClick={handleShowMore} />
      </Layout>
    </Context.Provider>
  );
};
