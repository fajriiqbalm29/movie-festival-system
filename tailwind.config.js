module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily: {
       poppins: 'Poppins, sans-serif'
     },
     extend: {
       colors: {
         gray: '#111827',
         white: '#d9e6eb',
         'light-gray': '#182236',
         yellow: '#ffd859',
         'dark-yellow': '#f7d336',
         "alerange": '#FB6908',
         "gray-1": '#B4B4B4',
         "gray-2": '#E2E0E0',
         "form-bg": '#212121',
         navy: '#160442'
       },
       screens: {
         'laptopLg': '1160px',
         'laptopXl': '1360px',
       }
     },
  },
  plugins: [],
}