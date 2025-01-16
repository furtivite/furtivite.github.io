import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../app/tailwind.css';
import { defaultContext, ELangVariables, EThemeVariables, IStoreContext, StoreContext } from '../../app/StoreContext';
import { Layout } from '../../entities';

export const Store: React.FC = () => {
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
    <StoreContext.Provider value={{ theme, lang, themeSwitchHandler, langSwitchHandler }}>
      <Layout>
        <div className="container mx-auto px-3">
          <p>{lang}</p>
          <p>{theme}</p>
        </div>
      </Layout>
    </StoreContext.Provider>
  );
};
