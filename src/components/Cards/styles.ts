import { AiFillGithub } from "react-icons/ai";
import styled, { css } from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 400px;
  margin: 0 auto;

  box-shadow: 0 4px 4px 0 ${(props) => props.theme.colors.shadow};

  #mainCardContainer {
    width: 400px;

    #cardImage {
      min-width: 100%;
      max-width: 100%;
    }

    #cardTextContainer {
      display: flex;
      flex-direction: column;
      gap: 1em;

      padding: 1em;

      & > first-child {
        margin-bottom: 1em;
      }

      h3 {
        font-size: 1.5em;
      }

      p {
        font-size: 1em;
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
      margin: 1em;

      width: 500px;

      overflow: hidden;

      #mainCardContainer {
        width: 500px;
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
  `}
`;

export const GithubIcon = styled(AiFillGithub)`
  margin-right: 0.4em;
`;
