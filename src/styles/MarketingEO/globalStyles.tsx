import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { memo } from 'react';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Effra";
    src: url('/fonts/Effra_Std_Rg.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Effra Bold";
    src: url('/fonts/Effra_Std_Bd.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Effra Light";
    src: url('/fonts/Effra_Std_Lt.ttf');
    font-weight: normal;
    font-style: normal;
   }
   @font-face {
     font-family: "Effra Medium";
     src: url('/fonts/Effra_Std_Md.ttf');
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
    font-family: "Effra";
  }

  html {
    overflow-x: hidden;
  }

  a, button, p {
    font-family: "Effra";
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Effra Bold";
  }

  .mediumFont {
    font-family: "Effra Medium";
  }
`;

export default memo(GlobalStyles);
