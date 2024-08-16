import React from 'react';
import { useTranslation } from 'react-i18next';

interface LogoProps {
  /** Флаг тёмной темы */
  onDark: boolean;
}

/**
 * Компонент "Логотип"
 */

export const Logo = ({ onDark = false }: LogoProps): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <a href="#">
      <img
        width="50"
        height="50"
        src={
          onDark
            ? 'https://img.icons8.com/ios-filled/100/FCC419/logo.png'
            : 'https://img.icons8.com/ios-filled/100/666600/logo.png'
        }
        alt="Груша"
      />
      <span>{t('header.appTitle')}</span>
    </a>
  );
};
