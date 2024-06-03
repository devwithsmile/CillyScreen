
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        bg_light:'#F7F7F7',
        bg_dark:'#212121',
        text_light:'#003285',
        text_dark:'#7469B6',
        bg_nav_light:'#F5F7F8',
        bg_nav_dark:'#102C57',
      }
    },
  },
  plugins: [],
}