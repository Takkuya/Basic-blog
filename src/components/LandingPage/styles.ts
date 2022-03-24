import styled, { css } from "styled-components";

export const LandingPageContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.colors.landingPageBackground};
  padding: 2em 8em;

  #textsContainer {
    display: flex;
    flex-direction: column;
    gap: 0.6em;

    .title {
      h2 {
        font-size: 3em;
        font-weight: 800;
        color: ${(props) => props.theme.colors.headingText};
      }
    }

    .about {
      width: 60%;
      text-align: justify;
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
    display: block;
    max-width: 100%;
  }

  svg {
    width: 100%;
    height: 10%;
  }

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}) {
      padding: 2em 4em;

      #textsContainer {
        display: flex;
        justify-content: center;
      }

      .about {
        span {
          width: 100%;
        }
      }

      #svgContainer {
        display: hidden;
        max-width: 0;
      }
    }
  `}
`;
