import { useEffect } from "react";
import { Cards } from "../Cards";
import { ProjectsContainer } from "./styles";

export const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Gabriel Takuya Yamamoto";
  }, []);

  return (
    <ProjectsContainer>
      <section id="projectsTitleContainer">
        <h1>Projetos</h1>
        <div></div>
      </section>
      <section id="wrapper">
        <section id="projectTextsContainer">
          <p>
            Projetos que valem a pena o destaque, são projetos os quais me
            diverti bastante no desenvolvimento, além de terem sido ótimos
            aprendizados.
          </p>
        </section>
      </section>

      <section id="projectsCardsContainer">
        <Cards
          projectImg="https://cdn.discordapp.com/attachments/369658605450035210/959284045961908244/unknown.png"
          projectAlt="gabrielyamamoto.com título"
          projectTitle="gabrielyamamoto.com"
          projectText="Meu primeiro projeto em ReactJS, uma espécie de portifólio em forma de site, feito usando ReactJS e StyledComponents"
          projectLink="https://github.com/Takkuya/Basic-blog"
        />
      </section>
    </ProjectsContainer>
  );
};
