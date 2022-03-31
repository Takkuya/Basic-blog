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
  max-width: 1400px;
  padding-top: 4em;
  gap: 1em;

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
    gap: 2em;
    margin: 0 auto;
    width: 80%;

    #myInformationContainer,
    #myStackContainer {
      max-width: 1100px;
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
      #myInformationContainer {
        margin: 0 auto;
        width: 83%;
      }

      #wrapInformationContainer {
        justify-content: center;
        align-items: center;
      }
    }

    @media (min-width: ${breakpoints.xl}) {
      max-width: 90%;
      margin: 0 auto;
    }
  `}
`;

const iconCSS = css`
  width: 2.5em;
  height: 2.5em;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: translateY(-10px);
  }
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
