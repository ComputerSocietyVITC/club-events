module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbarbg: '#E5E5E5',
        mainbg: '#054E4E',
        darkergreen: '#1F4B58',
        lightergreen: '#00C597',
        brightkindagreen: '#26D457',
      },
      fontFamily: {
        normal: ['Arial'],
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
      gridTemplateColumns: {
        '2to1': '2fr 1fr',
      },
      inset: {
        ecmleft: '-17rem',
        ecmtop: '-5rem',
      },
      rotate: {
        neg60: '-50deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
