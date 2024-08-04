import React from 'react';

interface LogoProps {
  /** Флаг тёмной темы */
  onDark: boolean;
}

/**
 * Компонент "Логотип"
 */
export const Logo = ({ onDark = false }: LogoProps): React.ReactElement => (
  <a href="#">
    <img
      width="100"
      height="100"
      src={
        onDark
          ? 'https://img.icons8.com/ios-filled/100/FCC419/logo.png'
          : 'https://img.icons8.com/ios-filled/100/logo.png'
      }
      alt="Груша"
    />
  </a>
);
