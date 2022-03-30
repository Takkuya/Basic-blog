import { Cards } from "../Cards";
import { ProjectsContainer } from "./styles";

export const Projects = () => {
  return (
    <ProjectsContainer>
      <section id="projectsTitleContainer">
        <h1>Projetos</h1>
        <div></div>
      </section>
      <section id="wrapper">
        <section id="projectTextsContainer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            accusantium blanditiis at, distinctio sunt, eos odio ducimus vel
            repudiandae dolore, nisi obcaecati quo iste quam magnam itaque ipsa
            veniam officiis?
          </p>
        </section>
      </section>

      <section id="projectsCardsContainer">{Array(4).fill(<Cards />)}</section>
    </ProjectsContainer>
  );
};
