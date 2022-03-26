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

  h1 {
    text-align: center;
  }

  div {
    border: 1px solid ${(props) => props.theme.colors.primary};
    width: 35%;
    align-self: center;
  }

  h3 {
    text-align: center;
  }

  #myInformationContainer,
  #myStackContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
  }

  #myStackContainer {
    #iconsContainer {
      display: flex;
      gap: 1em;
      justify-content: center;
    }
  }

  background-color: ${(props) => props.theme.colors.mainBackground};

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      padding: 2em 5em;
      background-color: blue;
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
