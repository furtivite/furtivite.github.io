import React from 'react';
import clsx from 'clsx';

import './layout.css';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactFragment;
}

/**
 * Компонент "Лейаут"
 */
export const Layout = ({ children }: LayoutProps): React.ReactElement => {
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
