import {
  AboutContainer,
  CSSIcon,
  HtmlIcon,
  JavascriptIcon,
  PythonIcon,
  ReactIcon,
  GitIcon,
  TypescriptIcon,
} from "./styles";

export const About = () => {
  return (
    <AboutContainer>
      <h1>Sobre mim</h1>
      <div></div>
      <section id="myInformationContainer">
        <h3>Mais sobre mim</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat{" "}
          <a href="#">projetos</a> enim omnis, quos consectetur und.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          enim omnis, quos consectetur und.
        </p>
      </section>
      <section id="myStackContainer">
        <h3>Tecnologias que utilizo</h3>
        <section id="iconsContainer">
          <CSSIcon />
          <HtmlIcon />
          <JavascriptIcon />
          <TypescriptIcon />
          <ReactIcon />
          <PythonIcon />
          <GitIcon />
        </section>
      </section>
    </AboutContainer>
  );
};
