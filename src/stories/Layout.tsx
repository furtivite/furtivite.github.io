import React from 'react';
import clsx from 'clsx';

import './layout.css';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactFragment;
}

/**
 * Компонет лейаута
 */
export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  return (
    <main className={clsx('layout', isDark && 'layout_dark')} style={{ maxHeight: '600px' }}>
      {/* maxHeight для демонстрации sticky в шапке */}
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="layout__content">{children}</div>
    </main>
  );
};
