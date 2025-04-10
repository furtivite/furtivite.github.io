import React from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';
import './tailwind.css';
import { Layout } from '../entities';
import { AccountServicePage, ProfilePage, Store, StoreBasket, StoreCard, StoreList } from '../pages';
import { defaultContext, ELangVariables, EThemeVariables, IStoreContext, StoreContext } from './StoreContext';

function App() {
  const [contextValue, setContextValue] = React.useState<IStoreContext>(defaultContext);
  const { theme, lang } = contextValue;
  const { i18n, t } = useTranslation();

  const themeSwitchHandler = (): void => {
    if (theme === 'light') {
      setContextValue({ ...contextValue, theme: EThemeVariables.DARK });
    } else {
      setContextValue({ ...contextValue, theme: EThemeVariables.LIGHT });
    }
  };

  const langSwitchHandler = (): void => {
    if (lang === 'ru') {
      setContextValue({ ...contextValue, lang: ELangVariables.EN });
      i18n.changeLanguage('en-US');
    } else {
      setContextValue({ ...contextValue, lang: ELangVariables.RU });
      i18n.changeLanguage('ru-RU');
    }
  };

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
  ];
  // const currentUrl = window.location.pathname;
  // END TODO

  return (
    <StoreContext.Provider value={{ theme, lang, themeSwitchHandler, langSwitchHandler }}>
      <BrowserRouter>
        <Layout>
          {/* TODO: Delete this Links and translation in future */}
          <nav className="container mx-auto my-4 px-3">
            <ol className="flex flex-wrap gap-2">
              {tempLinks.map((item) => (
                <li key={nanoid()}>
                  <NavLink
                    className={({ isActive }) =>
                      [isActive ? 'bg-black text-white' : '', 'p-1 hover:text-white hover:bg-slate-400 rounded'].join(
                        ' '
                      )
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

          <Routes>
            <Route key={nanoid()} path="/" element={<Store />} />
            <Route key={nanoid()} path="/basket" element={<StoreBasket />} />
            <Route key={nanoid()} path="/card/:id" element={<StoreCard />} />
            <Route key={nanoid()} path="/list" element={<StoreList />} />
            <Route key={nanoid()} path="/list/modal" element={<StoreList />} />
            <Route key={nanoid()} path="/account-service" element={<AccountServicePage />} />
            <Route key={nanoid()} path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
