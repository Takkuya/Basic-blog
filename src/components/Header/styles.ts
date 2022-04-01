import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 5em;
  max-width: 1868px;
  margin: 0 auto;

  background-color: ${(props) => props.theme.colors.mainBackground};

  //fixar header
  position: sticky;
  top: 0;
  right: 0;
  left: 0;

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

    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  #linksSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;

    //ativar esse estilo quando o link for selecionado
    .active {
      color: ${(props) => props.theme.colors.primary};
      transition: 0.4s;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  .hamburguerMenuBtn {
    display: none;
  }

  .closeMenuBtn {
    display: none;
  }

  ${({ theme: { breakpoints } }) => css<{ open: boolean }>`
    @media (max-width: ${breakpoints.md}) {
      padding: 1em 2em;
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

        max-height: ${({ open }) => (open ? "1100px" : "0px")};
        height: calc(110vh - 100px);
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
export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text};
  transition: 0.4s;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
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
