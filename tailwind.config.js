/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          font1: ['Poppins', 'sans-serif'],
          font2:['Inter', 'sans-serif'], 
      },
      colors: {
        textColor: '#FFFFFF',
        //bodyColor: '#1B004E',
        buttonColor: '#EB5757',
        footerColor: '#E6E6E6',
        redColor: '#1AFF7C',
        greenColor:'#FF1A1A',
        orangeColor: '#FFA500',
      },
      backgroundImage:{
        bgColor: "linear-gradient(227.07deg, #4E0062 0.43%, #220076 99.56%)",
      }
    },
  },
  plugins: [],
}