import { ReactComponent as DarkSVGIcon } from "../../assets/DarkProgrammer.svg";
import { About } from "../About";
import { LandingPageContainer, LandingWrapper, Wrapper } from "./styles";

export const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <LandingWrapper>
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
                    Possimus, voluptate eius deserunt velit nam consequatur
                    repellat delectus magni, quia sit cumque similique
                    consequuntur? Illum ab debitis, excepturi iusto fugiat
                    minima?
                  </span>
                </div>
                <div className="buttons">
                  <button className="primaryBtn">Projetos</button>
                  <button className="outlineBtn">Currículo</button>
                </div>
              </section>
              <section id="svgContainer">
                <DarkSVGIcon />
              </section>
            </section>
          </LandingPageContainer>
        </LandingWrapper>
      </Wrapper>
      <About />
    </>
  );
};
