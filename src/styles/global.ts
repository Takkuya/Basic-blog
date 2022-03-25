import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Inter';
     color: ${(props) => props.theme.colors.text};
 }

 button {
     border: none;
     cursor: pointer;
     background: none;
     font-size: 1em;
 }

 input {
     border: none;
     outline: none;
 }


 body {
     background: ${(props) => props.theme.colors.mainBackground};
 }


${({ theme: { breakpoints } }) => css`
  html {
    font-size: 100%;
  }
  @media (min-width: ${breakpoints.sm}) {
    html {
      font-size: 100%; //14px
    }
  }
  @media (min-width: ${breakpoints.md}) {
    html {
      font-size: 106%; //15px
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    html {
      font-size: 112%; //15px
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    html {
      font-size: 118%; //15px
    }
  }
`}


`;
