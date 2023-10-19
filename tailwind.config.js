/** @type {import('tailwindcss').Config} */
export default {
  content: [

 "./index.html", 
 "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    colors: {
      'main-green':'#39DB4A',
    },
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

