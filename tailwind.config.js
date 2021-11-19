module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        sm: '432px',
        md: '448px',
        lg: '512px',
        xl: '576px',
        xxl: '640px',

      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '9/10': '90%',
      },
      colors: {
        navbarbg: '#B5CFCF',
        mainbg: '#054E4E',
        darkergreen: '#1F4B58',
        lightergreen: '#00C597',
        brightkindagreen: '#26D457',
        footercolor: '#B5CFCF',
        fontdark: '#0F333E',
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

        xs: { max: '359px' },
        // => @media (max-width: 359px) { ... }
        '2mxl': { min: '1535px' },
        // => @media (max-width: 1535px) { ... }

        mxl: { min: '1279px' },
        // => @media (max-width: 1279px) { ... }

        mlg: { min: '1023px' },
        // => @media (max-width: 1023px) { ... }

        mmd: { min: '767px' },
        // => @media (max-width: 767px) { ... }

        msm: { min: '639px' },
        // => @media (max-width: 639px) { ... }

        mxs: { min: '359px' },
        // => @media (max-width: 359px) { ... }

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
      lineHeight: {
        0: '0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
