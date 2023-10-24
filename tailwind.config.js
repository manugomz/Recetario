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
      /*
      .slide-top {
	-webkit-animation: ;
	        animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
      */
    },
  },
  plugins: [],
}

