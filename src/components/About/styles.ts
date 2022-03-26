import styled, { css } from "styled-components";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoPython,
} from "react-icons/io";

import { GrReactjs } from "react-icons/gr";
import { FaGitSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;

  padding: 2em;
  text-align: justify;

  #aboutMeTextContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;

    h1 {
      text-align: center;
    }

    div {
      border: 1px solid ${(props) => props.theme.colors.primary};
      align-self: center;
      width: 100%;
    }
  }

  h2 {
    text-align: center;
  }

  #wrapInformationContainer {
    display: flex;
    flex-direction: column;
    gap: 1em;

    #myInformationContainer,
    #myStackContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1em;
      flex-wrap: wrap;
    }

    #myStackContainer {
      #iconsContainer {
        display: flex;
        gap: 1em;
        justify-content: center;
        //faz os elementos se partirem quando "menores"
        flex-wrap: wrap;
      }
    }
  }

  background-color: ${(props) => props.theme.colors.mainBackground};

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      padding: 2em 5em;

      svg {
        width: 1.8em;
        height: 1.8em;
      }

      #wrapInformationContainer {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 3em;

        #myInformationContainer {
          max-width: 50%;
        }

        #myStackContainer {
          #iconsContainer {
            display: flex;
          }
        }
      }
    }

    @media (min-width: ${breakpoints.lg}) {
      background-color: green;
    }
    @media (min-width: ${breakpoints.xl}) {
      background-color: yellow;
    }
  `}
`;

const iconCSS = css`
  width: 2.5em;
  height: 2.5em;
`;

export const CSSIcon = styled(IoLogoCss3)`
  ${iconCSS};
`;

export const HtmlIcon = styled(IoLogoHtml5)`
  ${iconCSS};
`;

export const JavascriptIcon = styled(IoLogoJavascript)`
  ${iconCSS};
`;

export const ReactIcon = styled(GrReactjs)`
  ${iconCSS};
`;

export const PythonIcon = styled(IoLogoPython)`
  ${iconCSS};
`;

export const GitIcon = styled(FaGitSquare)`
  ${iconCSS}
`;

export const TypescriptIcon = styled(SiTypescript)`
  ${iconCSS}
`;
