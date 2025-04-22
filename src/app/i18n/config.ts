import i18next, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './translation';
import { ELangVariables } from '../StoreContext';

use(initReactI18next).init({
  lng: ELangVariables.EN,
  debug: true,
  resources,
});

export default i18next;
