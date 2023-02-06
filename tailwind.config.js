/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./node_modules/flowbite.{js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        gray: {

          400: '#969798',

          500: '#666666',

          600: '#353535',

          700: '#262626',

          900: '#171818',
          
        }
      }
    },
  },
  plugins: [
    require('flowbite')
  ],
}
