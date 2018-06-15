import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en.json'
import de from './de.json'
import tr from './tr.json'

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    // lng: 'de', // 'en' | 'es' // => Can ooverride the lang here
    resources: {
      en: {
        translation: en
      },
      tr: {
        translation: tr
      },
      de: {
        translation: de
      }
    }
  })

export default i18n
