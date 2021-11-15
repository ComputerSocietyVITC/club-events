module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbarbg: '#E5E5E5',
        mainbg: '#054E4E',
      },
      fontFamily: {
        normal: ['Arial'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
