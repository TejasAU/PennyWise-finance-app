/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black' : '#0C1325',
        'navy-blue' : '#0F172A',
        'dark-green' : '#06976A',
        'off-white' : '#F0F5F8',
        'emerald' : '#34D399',
      }
    },
  },
  plugins: [],
});

