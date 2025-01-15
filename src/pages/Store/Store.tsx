import React from 'react';
import 'src/app/tailwind.css';
import { defaultContext, ELangVariables, EThemeVariables, IStoreContext, StoreContext } from 'src/app/StoreContext';
import { Layout } from 'src/entities';

export const Store: React.FC = () => {
  const [contextValue, setContextValue] = React.useState<IStoreContext>(defaultContext);

  const { theme, lang } = contextValue;

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
    } else {
      setContextValue({ ...contextValue, lang: ELangVariables.RU });
    }
  };

  return (
    <StoreContext.Provider value={{ theme, lang, themeSwitchHandler, langSwitchHandler }}>
      <Layout>
        <>
          <p>{lang}</p>
          <p>{theme}</p>
        </>
      </Layout>
    </StoreContext.Provider>
  );
};
