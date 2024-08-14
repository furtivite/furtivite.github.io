import React from 'react';

import './btn.css';

interface BtnProps {
  /** Текст */
  text: string;
  /** Обработчик клика */
  onClick: () => void;
  /** Признак задизейбленной кнопки */
  isDisabled?: boolean;
}

/**
 * Компонент "Кнопка"
 */
export const Btn = ({ text, onClick, isDisabled }: BtnProps): React.ReactElement => (
  <button className="btn" onClick={onClick} disabled={isDisabled}>
    {text}
  </button>
);
