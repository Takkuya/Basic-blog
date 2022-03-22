import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      mainBackground: string;
      landingPageBackground: string;
      alternativeBackground: string;
      iconColor: string;

      headingText: string;
      paragraphText: string;
      text: string;
    };
  }
}
