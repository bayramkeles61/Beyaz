import { createI18n } from 'vue-i18n'
import en from "./languages/en.json"
import fr from "./languages/fr.json"
import tr from "./languages/tr.json"

const messages = {
  English: en,
  Français: fr,
  Türkçe: tr,

} as {}

export const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'English',
  locale: "English",
  messages
})
