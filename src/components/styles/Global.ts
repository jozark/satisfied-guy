import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Mako&family=Noto+Sans&display=swap');
  
  @font-face {
  font-family: 'Sarpanch', sans-serif;
  src: url('assets/Sarpanch-Bold.ttf');
  font-weight: 700;
}
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #383439AA #000;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #000;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #383439;
    border-radius: 20px;
    border: 3px solid #000;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: 'roboto';
    color: #DEDEDE;
    margin: 0;
  }

  p {
    opacity: 0.87;
    line-height: 1.6;
    font-family: 'Noto Sans', sans-serif;
    padding: 0.5rem 0;
    letter-spacing: 0px;
  }

  img{
    max-width: 100%;
  }

`;
