import { ReactComponent as SVGIcon } from "../../assets/Programmer.svg";
import { About } from "../About";
import { LandingPageContainer } from "./styles";

export const LandingPage = () => {
  return (
    <>
      <LandingPageContainer>
        <section id="landingPageContainer">
          <section id="textsContainer">
            <div className="about">
              <p>Olá, me chamo</p>
            </div>
            <div className="title">
              <h2>
                Gabriel Takuya <br /> Yamamoto
              </h2>
            </div>
            <div className="about">
              <span>
                Lori ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, voluptate eius deserunt velit nam consequatur repellat
                delectus magni, quia sit cumque similique consequuntur? Illum ab
                debitis, excepturi iusto fugiat minima?
              </span>
            </div>
            <div className="buttons">
              <button className="primaryBtn">Projetos</button>
              <button className="outlineBtn">Currículo</button>
            </div>
          </section>
          <section id="svgContainer">
            <SVGIcon />
          </section>
        </section>
      </LandingPageContainer>
      <About />
    </>
  );
};
