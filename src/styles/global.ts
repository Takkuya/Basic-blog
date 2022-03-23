import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Inter';
     color: ${(props) => props.theme.colors.text};
 }

 body {
     background: ${(props) => props.theme.colors.mainBackground}
 }
`;
