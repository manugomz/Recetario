/** @type {import('tailwindcss').Config} */
export default {
  content: [

 "./index.html", 
 "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'green':{
          100: '#9ceda4', //light
          300: '#39DB4A', //main
          500: '#2DAF3B', //dark
        },
      },
      boxShadow: {
        'light': "0px 10px 30px -10px theme('colors.green.100')",
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

