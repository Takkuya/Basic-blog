import styled, { css } from "styled-components";

export const LandingPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.landingPageBackground};
  padding: 2em 10em;

  #textsContainer {
    display: flex;
    flex-direction: column;

    //o texto about não ficar grudado com o svg
    flex: 1;

    .title {
      h2 {
        font-size: 3em;
        font-weight: 800;
        color: ${(props) => props.theme.colors.headingText};
      }
    }

    .about {
      text-align: justify;

      //o texto about não ficar grudado com o svg
      max-width: 70%;
      span {
        color: ${(props) => props.theme.colors.paragraphText};
        text-align: justify;
      }

      p {
        font-weight: 600;
        color: ${(props) => props.theme.colors.paragraphText};
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      margin-top: 0.5em;
      gap: 1em;

      button {
        font-weight: 500;
      }

      .primaryBtn {
        color: #fff;
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 10px;
        padding: 0.6em;
      }

      .outlineBtn {
        background-color: none;
        border: 1px solid ${(props) => props.theme.colors.primary};
        border-radius: 10px;
        padding: 0.6em;
      }
    }
  }

  #svgContainer {
    display: flex;
    max-width: 100%;
  }

  svg {
    max-width: 400px;
    max-height: 400px;
    flex-grow: 0;
  }

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}) {
      padding: 2em 4em;

      #textsContainer {
        display: flex;
        justify-content: center;
        .about {
          max-width: 100%;
        }
      }

      #svgContainer {
        display: hidden;
        max-width: 0;
      }
    }
  `}
`;
