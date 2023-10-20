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
      'main-green':'#39DB4A',
    },
    },
  },
  plugins: [],
}

