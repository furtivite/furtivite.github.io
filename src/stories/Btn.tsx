import React from 'react';

import './btn.css';

interface BtnProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
}

/**
 * Компонет кнопки
 */
export const Btn = ({ text, onClick, isDisabled = false }: BtnProps): React.ReactElement => (
  <button className="btn" onClick={onClick} disabled={isDisabled}>
    {text}
  </button>
);
