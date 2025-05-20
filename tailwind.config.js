/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      keyframes:{
        infinite_scroll:{
          "0%":{transform:"translateX(0)"},
          "100%":{transform:"translate(-50%)"},
        },
      },
      animation:{infinite_scroll:"infinite_scroll 20s linear infinite"},
      colors: {
        
        //SHPE colors
        'shpe-blue': '#0a70b9',
        'shpe-orange': '#f2652f',
        'shpe-red': '#d43b21',
        'shpe-blue2': '#72abbf',

        //UTD colors
        'utd-green': '#325949',
        'utd-orange': '#f2792b',

      },
    },
  },
  plugins: [],
}

