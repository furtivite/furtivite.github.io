import React from 'react';
import clsx from 'clsx';

import './header.css';
import { Logo } from './Logo';
import { ThemeSwitchBtn } from './ThemeSwitch';

interface HeaderProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Компонет header
 */
export const Header = ({ isDark, setIsDark }: HeaderProps): React.ReactElement => {
  return (
    <header className={clsx('header', 'sticky', isDark && 'header_dark')} style={{ top: '-32px' }}>
      {/* styles для демонстрации sticky в шапке */}
      <Logo onDark={isDark} />
      <ThemeSwitchBtn isDark={isDark} onClick={() => setIsDark(!isDark)} />
    </header>
  );
};
