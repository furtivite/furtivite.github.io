import React from 'react';

import './app-example.css';
import { Btn } from './Btn';
import { Layout } from './Layout';
import { Modal } from './Modal';
import { ShortCard } from './ShortCard';

/**
 * Компонент "Примера приложения"
 */
export const AppExample = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>('');

  return (
    <Layout>
      <div className="flex-column align-items-start gap-8 margin-bottom-16">
        <input
          value={inputValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
          placeholder="Введите текст"
        />
        <Btn text="Открыть модалку" isDisabled={inputValue === ''} onClick={() => setIsModalOpen(true)} />
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
      </div>

      {/* <Modal showModal /> */}
      <div className="flex-column gap-16">
        <ShortCard categoryName="Транспорт" price={1500} description="Шиномонтаж" title="Колесо монтаж" />
        <ShortCard categoryName="Продукты" price={500} description="Ветчина" title="Дикси" />
      </div>
    </Layout>
  );
};
