import React from 'react';
import { Btn } from '../Btn/Btn';

import '../../app/App.css';

interface ModalFormProps {
  inputValue: string | number | readonly string[];
  // TODO: Убрать нахрен
  setInputValue: any;
  handleModalFormClick: () => void;
}

/**
 * Компонент вызова модального окна
 * с прокидыванием текста из инпута
 */

export const ModalForm = ({ inputValue, setInputValue, handleModalFormClick }: ModalFormProps): React.ReactElement => (
  <div className="flex-column align-items-start gap-8 margin-bottom-16">
    <input
      value={inputValue}
      onChange={(e: React.FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
      placeholder="Введите текст"
    />
    <Btn text="Открыть модалку" isDisabled={inputValue === ''} onClick={handleModalFormClick} />
  </div>
);
