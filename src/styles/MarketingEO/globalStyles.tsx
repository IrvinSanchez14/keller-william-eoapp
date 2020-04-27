import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Regular";
    src: url('/static/fonts/Effra_Std_Rg.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Bold";
    src: url('/static/fonts/Effra_Std_Bd.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Light";
    src: url('/static/fonts/Effra_Std_Lt.ttf');
    font-weight: normal;
    font-style: normal;
   }

  * { box-sizing: border-box; }

  button {
    &:focus{
        outline: 0;
    }
  }

  body {
    overflow: hidden;
    position: relative;
  }

  html {
    overflow-x: hidden;
  }

  a, button, p {
    font-family: "Regular";
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Bold";
  }
`;

export default React.memo(GlobalStyles);
