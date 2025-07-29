 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      fontFamily: {
        jersey: ['"Jersey 10"', 'sans-serif'],
        normaltext: ['"Concert One"', 'sans-serif'],
      },
      colors: {
        logocolor: '#D61F21',
        normalcolor:'#ffffff',
        imagination:'#E8161A',
      },
      fontSize: {
        custom: "50.888px",
        normallogin:"22.475px",
        navlinks:"25.34px",
        start:"28.65px",

      },
     },
   },
   plugins: [],
 }