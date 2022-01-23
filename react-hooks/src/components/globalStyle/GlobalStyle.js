import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/bg.jpeg';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgImg}) center no-repeat;
    background-size: cover;
    color: #332c36;
    font-family: 'New Tegomin', serif;
    margin: 0;
    padding: 0;
  }
`;