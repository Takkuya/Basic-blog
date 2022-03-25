import styled, { css } from "styled-components";

export const LandingPageContainer = styled.div`
  display: flex;
  padding: 2em;

  background-color: ${(props) => props.theme.colors.landingPageBackground};

  #textsContainer {
    display: flex;
    flex-direction: column;
    flex: 1;

    .title {
      h2 {
        font-size: 3em;
        font-weight: 800;
        color: ${(props) => props.theme.colors.headingText};
      }
    }

    .about {
      max-width: 100%;

      span {
        color: ${(props) => props.theme.colors.paragraphText};
      }

      p {
        font-weight: 600;
        color: ${(props) => props.theme.colors.paragraphText};
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      margin-top: 1em;
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
    display: hidden;
    max-width: 0;
  }

  svg {
    max-width: 0;
    max-height: 0;
  }

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      padding: 2em 5em;
      /* background-color: red; */
    }
    @media (min-width: ${breakpoints.lg}) {
      #textsContainer {
        .about {
          max-width: 60%;
        }
      }
    }

    @media (min-width: ${breakpoints.xl}) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      background-color: ${(props) => props.theme.colors.landingPageBackground};
      padding: 5em 10em;

      #textsContainer {
        display: flex;
        flex-direction: column;

        flex: 1;

        .about {
          text-align: justify;

          max-width: 70%;
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
    }
  `}
`;
