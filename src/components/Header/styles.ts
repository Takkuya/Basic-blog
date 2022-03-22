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

  padding: 36px 80px;
  color: ${(props) => props.theme.colors.text};

  a {
    text-decoration: none;
    font-weight: 500;
  }

  #logo {
    font-weight: 600;
    font-size: 1.4rem;
  }

  #linksSection {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
  }
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
