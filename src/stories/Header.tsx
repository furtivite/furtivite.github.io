import React from 'react';

import './header.css';
import { Logo } from './Logo';
import { LightModeBtn } from './LigthModeBtn';

/**
 * Компонет header
 */
export const Header = (): React.ReactElement => {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  return (
    <header className={`header${isDark ? ' header_dark ' : ' '}sticky`}>
      <Logo onDark={isDark} />
      <LightModeBtn isDark={isDark} onClick={() => setIsDark(!isDark)} />
    </header>
  );
};
