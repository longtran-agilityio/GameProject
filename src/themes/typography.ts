import GTWalsheim from '@webapp/assets/gtwalsheimProRegular/gtwalsheimProRegular.ttf'
export default {
  caption: {
    fontSize: 58,
  },
  h2: {
    fontSize: 28,
  },
  h3: {
    fontSize: 24,
  },
  h4: {
    fontSize: 22,
  },
  h5: {
    fontSize: 20,
  },
  h6: {
    fontSize: 18,
  },
  h7: {
    fontSize: 16,
  },
  body1: {
    fontSize: 14,
  },
  fontFamily: ['"GT Walsheim"', 'sans-serif'].join(','),
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'GT Walsheim';
          font-style: normal;
          font-display: swap;
          src: local('GTWalsheim'), local('GTWalsheim-Regular'), url(${GTWalsheim}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
}
