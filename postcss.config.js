module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      autoprefixer: { grid: false },
      "nesting-rules": false,
    },
    "postcss-mixins": {},
    "postcss-functions": {},
  },
};
