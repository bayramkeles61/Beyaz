import { createI18n } from 'vue-i18n'
import en from "./languages/en.json"
import tr from "./languages/tr.json"

const messages = {
  en,
  tr
} as {}

export const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
  locale: 'tr',
  messages
})
