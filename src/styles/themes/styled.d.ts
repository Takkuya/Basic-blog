import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      mainBackground: string;
      landingPageBackground: string;
      alternativeBackground: string;

      headingText: string;
      paragraphText: string;
      text: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
