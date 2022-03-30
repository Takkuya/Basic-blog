import { AiFillGithub } from "react-icons/ai";
import styled, { css } from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0 auto;

  width: 300px;

  box-shadow: 2px 11px 12px 1px ${(props) => props.theme.colors.shadow};

  #mainCardContainer {
    width: 300px;

    #cardImage {
      min-width: 100%;
      max-width: 100%;
    }

    #cardTextContainer {
      display: flex;
      flex-direction: column;
      gap: 1em;

      padding: 1.5em;

      & > first-child {
        margin-bottom: 1em;
      }

      h3 {
        font-size: 1.5em;
        color: ${(props) => props.theme.colors.headingText};
      }

      p {
        font-size: 1em;
        color: ${(props) => props.theme.colors.paragraphText};
      }

      a {
        text-decoration: none;

        button {
          display: flex;
          align-items: center;
          border-radius: 10px;

          padding: 0.6em;
          background-color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.sm}) {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;

      width: 350px;

      overflow: hidden;

      #mainCardContainer {
        width: 350px;
        #cardImage {
          min-width: 100%;
          max-width: 100%;

          height: auto;
        }

        img {
          width: 10%;
        }
      }
    }
    @media (min-width: ${breakpoints.lg}) {
      width: 450px;

      #mainCardContainer {
        width: 450px;
      }
    }
    @media (min-width: ${breakpoints.lg}) {
      width: 500px;

      #mainCardContainer {
        width: 500px;
      }
    }
  `}
`;

export const GithubIcon = styled(AiFillGithub)`
  margin-right: 0.4em;
`;
