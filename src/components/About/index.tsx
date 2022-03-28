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
            <a href="#">projetos</a> enim omnis, quos consectetur und. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Repellat{" "}
            <a href="#">projetos</a> enim omnis, quos consectetur und. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Repellat {""}
            <a href="#">projetos</a> enim omnis, quos consectetur und.
          </p>
        </section>

        <section id="myStackContainer">
          <h2>Tecnologias que utilizo</h2>
          <section id="iconsContainer">
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
              <CSSIcon />
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
              <HtmlIcon />
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
              <JavascriptIcon />
            </a>
            <a href="https://www.typescriptlang.org/docs/">
              <TypescriptIcon />
            </a>
            <a href="https://reactjs.org/docs/getting-started.html">
              <ReactIcon />
            </a>
            <a href="https://git-scm.com">
              <GitIcon />
            </a>
          </section>
        </section>
      </section>
    </AboutContainer>
  );
};
