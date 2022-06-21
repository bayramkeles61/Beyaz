import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  shortcuts: {
    'btn': 'hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-500 cursor-pointer',
  },
  plugins: [
    formsPlugin
  ],
})