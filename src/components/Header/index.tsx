import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { HeaderContainer } from "./styles";

import Switch from "react-switch";

interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <h1>Hello World</h1>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.primary}
        onColor={colors.alternativeBackground}
      />
    </HeaderContainer>
  );
};
