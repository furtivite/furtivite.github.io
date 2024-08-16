import React from 'react';
import clsx from 'clsx';

import './layout.css';
import { Header } from '../Header/Header';
import { Context } from '../../app/Context';

interface LayoutProps {
  children: React.ReactFragment;
}

/**
 * Компонент "Лейаут"
 */
export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  const { theme } = React.useContext(Context);

  return (
    <main className={clsx('layout', theme === 'dark' && 'layout_dark')}>
      <Header isDark={theme === 'dark'} />
  const [isDark, setIsDark] = React.useState<boolean>(false);

  const themeSwitchHandler = (): void => {
    setIsDark(!isDark);
  };

  return (
    <main className={clsx('layout', isDark && 'layout_dark')} style={{ maxHeight: '600px' }}>
      {/* maxHeight для демонстрации sticky в шапке */}
      <Header isDark={isDark} themeSwitchHandler={themeSwitchHandler} />
      <div className="layout__content">{children}</div>
    </main>
  );
};
