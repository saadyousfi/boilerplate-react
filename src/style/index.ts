import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#EBADB3',
  background: '#F8F9FB',
  secondaryBackground: '#E8EAEE',
  grey: '#797D86',
};
export type Theme = typeof theme;

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

`;
