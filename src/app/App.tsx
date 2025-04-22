import React from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';
import './tailwind.css';
import { Layout } from '../entities';
import { AccountServicePage, ProfilePage, Store, StoreBasket, StoreCard, StoreList, Login } from '../pages';
import { defaultContext, ELangVariables, EThemeVariables, IStoreContext, StoreContext } from './StoreContext';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useAppSelector } from './store/hooks';

function App() {
  const [contextValue, setContextValue] = React.useState<IStoreContext>(defaultContext);
  const { theme, lang } = contextValue;
  const { i18n } = useTranslation();

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

  return (
    <Provider store={store}>
      <StoreContext.Provider value={{ theme, lang, themeSwitchHandler, langSwitchHandler }}>
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/" element={<Store />} />
            <Route path="/basket" element={<StoreBasket />} />
            <Route path="/card/:id" element={<StoreCard />} />
            <Route path="/list" element={<StoreList />} />
            <Route path="/list/modal" element={<StoreList />} />
            <Route path="/account-service" element={<AccountServicePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </StoreContext.Provider>
    </Provider>
  );
}

export default App;
