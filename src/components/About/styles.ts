import styled, { css } from "styled-components";

import { GrReactjs } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { JavascriptSvgIcon } from "../../assets/icons/Javascript";
import { CssSvgIcon } from "../../assets/icons/Css";
import { HtmlSvgIcon } from "../../assets/icons/Html";

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
      font-size: 2em;
      color: ${(props) => props.theme.colors.headingText};
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

      p,
      a {
        color: ${(props) => props.theme.colors.paragraphText};
      }

      h2 {
        color: ${(props) => props.theme.colors.headingText};
      }
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
      margin-top: 1em;
      gap: 2em;

      #wrapInformationContainer {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 2em;

        #myInformationContainer {
          max-width: 48%;
        }

        #myStackContainer {
          #iconsContainer {
            display: flex;
          }
        }
      }
    }

    @media (min-width: ${breakpoints.xl}) {
      gap: 2em;
      padding: 5em 15em;
    }
  `}
`;

const iconCSS = css`
  width: 2.5em;
  height: 2.5em;
  cursor: pointer;
`;

export const CSSIcon = styled(CssSvgIcon)`
  ${iconCSS};
  fill: #264de4;
`;

export const HtmlIcon = styled(HtmlSvgIcon)`
  ${iconCSS};
  fill: #e34c26;
`;

export const JavascriptIcon = styled(JavascriptSvgIcon)`
  ${iconCSS};
`;

export const ReactIcon = styled(GrReactjs)`
  ${iconCSS};
  fill: #61dbfb;
`;

export const GitIcon = styled(FaGitAlt)`
  ${iconCSS};
  fill: #f1502f;
`;

export const TypescriptIcon = styled(SiTypescript)`
  ${iconCSS}
  fill: #3178c1;
`;
