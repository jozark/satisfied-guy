import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      accent: string;
    };
    breakingPoints: {
      mobile: string;
      tablet: {
        max: string;
        min: string;
      };
      desktop: string;
    };
  }
}
