import React from 'react';

interface ContextProps {
  // TODO переделать на енум
  theme: 'light' | 'dark';
  themeSwitchHandler: () => void;
}

export const Context = React.createContext<ContextProps>({
  theme: 'light',
  themeSwitchHandler: () => null,
});
