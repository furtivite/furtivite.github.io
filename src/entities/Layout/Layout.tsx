import React from 'react';
import clsx from 'clsx';
import { Header } from '../../entities';
import { ILayout } from '../../entities/interfaces';
import { EThemeVariables, StoreContext } from '../../app/StoreContext';
import { NavLink } from 'react-router';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

export const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  const { theme, lang } = React.useContext(StoreContext);
  const className = clsx('relative min-h-screen', theme === EThemeVariables.DARK ? 'bg-black text-w-100' : '');

  const { t } = useTranslation();

  // TODO: Delete this Links and translation in future
  const tempLinks = [
    {
      path: '/',
      text: t('tempLinks.toMain'),
    },
    {
      path: '/card/1',
      text: t('tempLinks.toCard'),
    },
    {
      path: '/basket',
      text: t('tempLinks.toBasket'),
    },
    {
      path: '/list',
      text: t('tempLinks.toList'),
    },
    {
      path: '/account-service',
      text: t('tempLinks.toAccountService'),
    },
    {
      path: '/profile',
      text: t('tempLinks.toProfilePage'),
    },
    {
      path: '/login',
      text: 'Login',
    },
  ];
  // const currentUrl = window.location.pathname;
  // END TODO

  return (
    <div className={className} lang={lang}>
      <Header />
      {/* TODO: Delete this Links and translation in future */}
      <nav className="container mx-auto my-4 px-3">
        <ol className="flex flex-wrap gap-2">
          {tempLinks.map((item) => (
            <li key={nanoid()}>
              <NavLink
                className={({ isActive }) =>
                  [isActive ? 'bg-black text-white' : '', 'p-1 hover:text-white hover:bg-slate-400 rounded'].join(' ')
                }
                to={item.path}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
      {/* END TODO */}
      <main>{children}</main>
    </div>
  );
};
