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
    'btn': 'px-5 py-3 rounded font-medium',
    'primary': 'text-white bg-blue-600 hover:shadow-blue-500',
    'secondary': 'text-blue-600 bg-transparent hover:bg-blue-500 hover:text-white',
    'social-btn': 'hover:text-gray-900 dark:hover:text-gray-100 text-gray-600 dark:text-gray-500 cursor-pointer',
  },
  plugins: [
    formsPlugin
  ],
})