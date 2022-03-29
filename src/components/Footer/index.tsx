import {
  EmailIcon,
  FooterContainer,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Wrapper,
} from "./styles";

export const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <section id="footerIconsContainer">
          <a href="https://github.com/Takkuya">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/notifications/">
            <LinkedinIcon />
          </a>
          <a href="mailto:takuyagabriel@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://www.instagram.com/takkuyya_00/">
            <InstagramIcon />
          </a>
        </section>
        <section id="footerCopyrightContainer">
          <p> &copy; 2022 Gabriel Takuya Yamamoto </p>
          <p>takuyagabriel@gmail.com</p>
        </section>
      </FooterContainer>
    </Wrapper>
  );
};
