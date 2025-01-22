import React from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter, Route, RouteProps, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';
import './tailwind.css';
import { Store, StoreBasket, StoreCard } from 'src/pages';
import { defaultContext, ELangVariables, EThemeVariables, IStoreContext, StoreContext } from './StoreContext';
import { Layout } from 'src/entities';

function App() {
  const [contextValue, setContextValue] = React.useState<IStoreContext>(defaultContext);
  const pages: RouteProps[] = [
    {
      path: '/',
      element: <Store />,
    },
    {
      path: '/basket',
      element: <StoreBasket />,
    },
    {
      path: '/card',
      element: <StoreCard />,
    },
  ];
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
      path: '/card',
      text: t('tempLinks.toCard'),
    },
    {
      path: '/basket',
      text: t('tempLinks.toBasket'),
    },
  ];
  const currentUrl = window.location.pathname;
  // END TODO

  return (
    <StoreContext.Provider value={{ theme, lang, themeSwitchHandler, langSwitchHandler }}>
      <Layout>
        {/* TODO: Delete this Links and translation in future */}
        <nav className="container mx-auto my-4 px-3">
          <ol className="flex gap-2">
            {tempLinks.map((item) =>
              item.path !== currentUrl ? (
                <li key={nanoid()}>
                  <a href={item.path}>{item.text}</a>
                </li>
              ) : (
                <></>
              )
            )}
          </ol>
        </nav>
        {/* END TODO */}
        <BrowserRouter>
          <Routes>
            {pages.map((item) => (
              <Route key={nanoid()} path={item.path} element={item.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </Layout>
    </StoreContext.Provider>
  );
}

export default App;
