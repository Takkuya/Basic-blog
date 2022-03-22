import { useContext } from "react";
import Switch from "react-switch";

import { ThemeContext } from "styled-components";
import {
  HeaderContainer,
  InstagramIcon,
  LinkedinIcon,
  StyledLink,
  TwitterIcon,
} from "./styles";

interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <h2 id="logo">Gabriel Takuya Yamamoto</h2>

      <section id="linksSection">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/projetos">Projetos</StyledLink>

        <InstagramIcon />
        <TwitterIcon />
        <LinkedinIcon />

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
