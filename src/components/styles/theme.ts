import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    background: 'black',
    accent: 'red',
  },
  breakingPoints: {
    mobile: '767px',
    tablet: {
      max: '1023px',
      min: '768px',
    },
    desktop: '1024px',
  },
};

export { theme };
