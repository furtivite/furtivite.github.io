import React from 'react';
import './App.css';
import { Layout } from 'src/UI/Layout/Layout';
import { Modal } from 'src/UI/Modal/Modal';
import { ShortCard } from 'src/UI/ShortCard/ShortCard';
import { ModalForm } from 'src/UI/ModaForm/ModalForm';
import { Context } from './Context';

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

        {/* TODO: Сделать перебором   */}
        <div className="flex-column gap-16">
          <ShortCard categoryName="Транспорт" price={1500} description="Шиномонтаж" title="Колесо монтаж" />
          <ShortCard categoryName="Продукты" price={500} description="Ветчина" title="Дикси" />
        </div>
      </Layout>
    </Context.Provider>
  );
};
