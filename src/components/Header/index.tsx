import { useContext, useState } from "react";
import Switch from "react-switch";

import { ThemeContext } from "styled-components";
import {
  CloseBtn,
  HamburguerMenu,
  HeaderContainer,
  InstagramIcon,
  LinkedinIcon,
  StyledLink,
} from "./styles";

interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [isHamburguerMenuOpen, setIsHamburguerMenuOpen] = useState(false);

  return (
    <HeaderContainer open={isHamburguerMenuOpen} className="globalPadding">
      <StyledLink to="">
        <h2 id="logo">GTY</h2>
      </StyledLink>

      <section id="linksSection">
        <StyledLink to="">Home</StyledLink>
        <StyledLink to="projetos">Projetos</StyledLink>

        <a href="https://www.instagram.com/takkuyya_00/">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-takuya-yamamoto-8a05691a4/">
          <LinkedinIcon />
        </a>

        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={20}
          offColor={colors.primary}
          onColor={colors.primary}
        />
      </section>

      <button
        className="hamburguerMenuBtn"
        onClick={() => setIsHamburguerMenuOpen(!isHamburguerMenuOpen)}
      >
        <HamburguerMenu />
      </button>
      <button
        className="closeMenuBtn"
        onClick={() => setIsHamburguerMenuOpen(!isHamburguerMenuOpen)}
      >
        <CloseBtn />
      </button>
    </HeaderContainer>
  );
};
