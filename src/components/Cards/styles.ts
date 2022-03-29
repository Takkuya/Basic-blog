import styled, { css } from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 10px;

  width: 40%;

  overflow: hidden;

  #mainCardContainer {
    width: 100%;
    #cardImage {
      width: 100%;

      min-width: 100%;
      max-width: 100%;

      height: auto;
      object-fit: contain;
    }

    #cardTextContainer {
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
    }
  }

  /* ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.sm}) {
      max-width: 85vw;
      background-color: yellow;
    }

    @media (min-width: ${breakpoints.sm}) {
      max-width: 16rem;
    }

    @media (min-width: ${breakpoints.lg}) {
      max-width: 17rem;
    }

    @media (min-width: ${breakpoints.xl}) {
      max-width: 100vw;
    }
  `} */
`;
