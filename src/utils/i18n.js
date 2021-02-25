import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import lang from '../../lang';

i18n.use(initReactI18next).init({
  resources: lang,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
