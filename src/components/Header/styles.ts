import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 5em;

  //blur
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  //fixar header
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  color: ${(props) => props.theme.colors.text};

  a {
    text-decoration: none;
    font-weight: 500;
  }

  #logo {
    font-family: "Mitr";
    letter-spacing: 0.2em;
    font-weight: 800;
    font-size: 1.6em;
    cursor: pointer;
  }

  #linksSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
  }

  .hamburguerMenuBtn {
    display: none;
  }

  .closeMenuBtn {
    display: none;
  }

  ${({ theme: { breakpoints } }) => css<{ open: boolean }>`
    @media (max-width: ${breakpoints.md}) {
      padding: 2em;
      //itens dentro do menu de hamburguer
      #linksSection {
        display: flex;
        /* conteúdo some quando não tiver altura, por causa do max-height*/
        overflow: hidden;
        flex-direction: column;
        justify-content: stretch;
        /* se colocar o padding na parte de cima caga tudo */
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;

        background-color: ${(props) => props.theme.colors.mainBackground};

        max-height: ${({ open }) => (open ? "1000px" : "0px")};
        height: calc(100vh - 100px);
      }

      .hamburguerMenuBtn {
        display: ${({ open }) => (open ? "hidden" : "block")};
      }

      .closeMenuBtn {
        display: ${({ open }) => (open ? "block" : "hidden")};
      }
    }
  `}
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
`;

export const HamburguerMenu = styled(GiHamburgerMenu)`
  width: 2em;
  height: 2em;
  fill: ${(props) => props.theme.colors.text};
`;

export const CloseBtn = styled(AiOutlineClose)`
  width: 2em;
  height: 2em;
  fill: ${(props) => props.theme.colors.text};
`;
