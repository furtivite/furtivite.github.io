import { createContext } from 'react';

export interface IDefaultValue {
  theme: 'light' | 'dark';
}

export const defaultValue: IDefaultValue = {
  theme: 'light',
};

export const AppContext = createContext(defaultValue);
