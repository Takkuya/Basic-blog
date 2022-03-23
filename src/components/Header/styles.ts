import styled, { css } from "styled-components";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme.colors.text};

  a {
    text-decoration: none;
    font-weight: 500;
  }

  #logo {
    font-weight: 800;
    font-size: 1.4em;
  }

  #linksSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
  }

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}) {
      background-color: red;
    }
  `}
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
`;

const iconCSS = css`
  flex-shrink: 0;
  fill: ${(props) => props.theme.colors.iconColor};
  width: 1.5rem;
  height: 1.5rem;
`;

export const InstagramIcon = styled(AiFillInstagram)`
  ${iconCSS}
`;

export const TwitterIcon = styled(AiOutlineTwitter)`
  ${iconCSS}
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
  ${iconCSS}
`;
