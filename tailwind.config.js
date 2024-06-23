/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'main-color':'#00ADB4',  
        'text-color':'#393D46',  
     
      },
      boxShadow:{
        'mainshadow':'10px 10px 0 #000',
        'mainshadow2':'-10px 10px 0px 0px #00A8FF',
        'shadowblack':'-10px 10px 0px 0px #000',
      
      },

    },
  },
  plugins: [],
}