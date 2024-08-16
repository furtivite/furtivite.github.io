import React from 'react';
import clsx from 'clsx';

import './header.css';
import '../../app/App.css';

import { Logo } from '../Logo/Logo';
import { ThemeSwitchBtn } from '../ThemeSwitchBtn/ThemeSwitch';
import { LangSwitchBtn } from '../LangSwitchBtn/LangSwitchBtn';

interface HeaderProps {
  isDark: boolean;
}

/**
 * Компонент "Хедер"
 */

export const Header = ({ isDark }: HeaderProps): React.ReactElement => {
  return (
    <header className={clsx('header', 'sticky', isDark && 'header_dark')}>
      <Logo onDark={isDark} />
      <div className="flex-row align-items-center">
        <ThemeSwitchBtn isDark={isDark} />
        <LangSwitchBtn />
      </div>
    </header>
  );
};
