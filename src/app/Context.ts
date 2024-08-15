import React from 'react';

export enum EThemeVariables {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum ELangVariables {
  RU = 'ru-ru',
  US = 'en-us',
}

interface ContextProps {
  theme: EThemeVariables;
  lang: ELangVariables;
  themeSwitchHandler: () => void;
}

export interface IContext {
  theme: EThemeVariables;
  lang: ELangVariables;
}

export const defaultContext: IContext = {
  theme: EThemeVariables.LIGHT,
  lang: ELangVariables.RU,
};

export const Context = React.createContext<ContextProps>({
  ...defaultContext,
  themeSwitchHandler: () => null,
});
