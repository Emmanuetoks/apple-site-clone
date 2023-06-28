/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        gray: {
          100: 'hsl(240, 1%, 26%)'
        }
      },
      backgroundColor: {
        gray: {
          100: "hsl(0, 0%, 23%)",
          200: "hsl(240, 1%, 26%)",
        },
        white: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(240, 11%, 96%)",
        },
      },
      screens: {
        mobile: "500px",
        tablet: "812px",
        desktop: "1030px",
      },

      textColor: {
        white: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(240, 11%, 96%)",
        },
        blue: {
          100: "hsl(209, 72%, 49%)",
          200: "hsl(209, 100%, 58%)",
        },

        gray: {
          100: "hsl(240, 1%, 62%)",
          200: "hsl(240, 1%, 44%)",
        },
      },
      colors: {
        gray: {
          100: 'hsl(240, 1%, 62%)',
          200: "hsl(240, 2%, 16%)",
        },

        blue: {
          200: 'hsl(210, 100%, 40%)',
        }
      }
    },
  },
  plugins: [],
};
