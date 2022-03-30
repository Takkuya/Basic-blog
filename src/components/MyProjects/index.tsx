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

      <section id="projectsCardsContainer">
        {Array(4).fill(
          <Cards
            projectImg="https://images.unsplash.com/photo-1648484479126-10c313d3722d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            projectAlt="basic blog image"
            projectTitle="ela é marido da minha mulher"
            projectText="isso é uma maravilha"
            projectLink="https://github.com/Takkuya/Basic-blog"
          />
        )}
      </section>
    </ProjectsContainer>
  );
};
