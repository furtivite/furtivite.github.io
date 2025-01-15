import React from 'react';
import {
  defaultContext,
  ELangVariables,
  EThemeVariables,
  IStoreContext,
  StoreContext,
} from '../../src/app/StoreContext';

export default function StoreDecorator(Story: any) {
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
      <Story />
    </StoreContext.Provider>
  );
}
