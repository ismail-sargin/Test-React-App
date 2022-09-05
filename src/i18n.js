import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common_en from '../src/translation/locales/en/en.json'
import common_tr from '../src/translation/locales/tr/tr.json'

const resources = {
  en: {
    translation: common_en,
  },
  tr: {
    translation: common_tr,
  },
}

i18n

  .use(initReactI18next)

  .init({
    resources,

    lng: 'tr',
  })

export default i18n
