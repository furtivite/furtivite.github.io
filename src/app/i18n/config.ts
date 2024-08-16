import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ELangVariables } from '../Context';
import { resources } from './resources';

export const LANG_STORAGE_KEY = 'lang';

i18next.use(initReactI18next).init({
  lng: localStorage.getItem(LANG_STORAGE_KEY) || ELangVariables.EN,
  resources,
});

export default i18next;
