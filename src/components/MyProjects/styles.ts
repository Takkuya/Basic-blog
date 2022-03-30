import styled, { css } from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  padding-top: 2em;
  gap: 1em;

  #projectsCardsContainer {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 5rem;
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 2em;
  }

  #projectsTitleContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;

    h1 {
      text-align: center;
      font-size: 2em;
      color: ${(props) => props.theme.colors.headingText};
    }

    div {
      border: 1px solid ${(props) => props.theme.colors.primary};
      align-self: center;
      width: 100%;
    }
  }

  #wrapper {
    display: flex;
    flex-direction: column;
    gap: 2em;
    text-align: justify;
    margin: 0 auto;
    width: 68%;

    #projectTextsContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1em;
      flex-wrap: wrap;

      p {
        color: ${(props) => props.theme.colors.paragraphText};
      }
    }
  }

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      #projectsCardsContainer {
      justify-content: center;
      align-content: center;
      gap: 5rem 1em;
      grid-template-columns: repeat(2, 1fr);
    }


    @media (min-width: ${breakpoints.xl}) {
      width: 100%;
      margin: 0 auto;
      align-self: center;
    }
  `}
`;
