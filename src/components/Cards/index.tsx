import { CardsContainer, GithubIcon } from "./styles";

interface CardProps {
  projectImg: string;
  projectAlt: string;
  projectTitle: string;
  projectText: string;
  projectLink: string;
}

export const Cards: React.FC<CardProps> = ({
  projectImg,
  projectAlt,
  projectTitle,
  projectText,
  projectLink,
}) => {
  return (
    <CardsContainer>
      <section id="mainCardContainer">
        <img src={projectImg} alt={projectAlt} id="cardImage" />

        <section id="cardTextContainer">
          <h3>{projectTitle}</h3>
          <p>{projectText}</p>
          <a href={projectLink}>
            <button className="primaryBtn">
              <GithubIcon />
              GitHub
            </button>
          </a>
        </section>
      </section>
    </CardsContainer>
  );
};
