import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ELangVariables } from '../app/StoreContext';
import { resources } from './translation';

i18next.use(initReactI18next).init({
  lng: ELangVariables.EN,
  debug: true,
  resources,
});

export default i18next;
