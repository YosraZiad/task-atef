import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: en },
      ar: { translations: ar }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;