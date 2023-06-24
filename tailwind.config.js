/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "500px",
        tablet: "812px",
        desktop: "1030px",
      },

      textColor: {
        'white': {
          50: '',
          100: ''
        }
      }
    },
  },
  plugins: [],
};
