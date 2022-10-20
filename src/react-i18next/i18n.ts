import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import resources from './locales/resources';
import storage from '@/utils/storage';

enum StorageType {
  DID = 'DID',
  AVATAR = 'AVATAR',
  LNG = 'i18nextLng',
  TUTORIAL_VISIBLE = 'TUTORIAL_VISIBLE',
  API_TOKEN = 'API_TOKEN',
}

const lng = storage.getItem(StorageType.LNG);
// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: lng,
    lng,
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
