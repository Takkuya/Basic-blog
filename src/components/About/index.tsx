import {
  AboutContainer,
  CSSIcon,
  HtmlIcon,
  JavascriptIcon,
  ReactIcon,
  GitIcon,
  TypescriptIcon,
} from "./styles";

export const About = () => {
  return (
    <AboutContainer>
      <section id="aboutMeTextContainer">
        <h1>Sobre mim</h1>
        <div></div>
      </section>
      <section id="wrapInformationContainer">
        <section id="myInformationContainer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat{" "}
            <a href="#">projetos</a> enim omnis, quos consectetur und. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Repellat {""}
            <a href="#">projetos</a> enim omnis, quos consectetur und.
          </p>
        </section>

        <section id="myStackContainer">
          <h2>Tecnologias que utilizo</h2>
          <section id="iconsContainer">
            <CSSIcon />
            <HtmlIcon />
            <JavascriptIcon />
            <TypescriptIcon />
            <ReactIcon />
            <GitIcon />
          </section>
        </section>
      </section>
    </AboutContainer>
  );
};
