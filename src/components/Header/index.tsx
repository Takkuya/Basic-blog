import { useContext } from "react";
import Switch from "react-switch";

import { ThemeContext } from "styled-components";
import {
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

  return (
    <HeaderContainer>
      <h2 id="logo">GabrielYamamoto</h2>

      <section id="linksSection">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/projetos">Projetos</StyledLink>

        <a href="https://www.instagram.com/takkuyya_00/">
          <InstagramIcon />
        </a>
        <a href="">
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
          offHandleColor={"#333"}
          onHandleColor={"#fff"}
          offColor={colors.primary}
          onColor={colors.primary}
        />
      </section>
    </HeaderContainer>
  );
};
