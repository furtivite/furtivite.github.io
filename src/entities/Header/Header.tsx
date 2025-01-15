import React from 'react';
import clsx from 'clsx';
import { LangSwitcherBtn, Logo, ThemeSwitcherBtn } from '../../shared';
import { ELogoType } from '../../shared/interfaces';
import { ELangVariables, EThemeVariables, StoreContext } from '../../app/StoreContext';

export const Header: React.FC = () => {
  const { theme, lang } = React.useContext(StoreContext);
  const isDarkTheme = theme === EThemeVariables.DARK;
  const className = clsx(
    'sticky top-0 py-[22px] border-b-[1px] border-solid',
    isDarkTheme ? 'border-b-900' : 'border-b-100'
  );
  const storeName = lang === ELangVariables.EN ? 'Ecommerce' : 'Ecommerce.RU';

  return (
    <header className={className}>
      <div className="flex flex-row justify-between items-center container mx-auto px-3">
        <Logo type={ELogoType.DARK} text={storeName} />
        <div className="flex flex-row justify-between items-center gap-4">
          <ThemeSwitcherBtn />
          <LangSwitcherBtn />
        </div>
      </div>
    </header>
  );
};
