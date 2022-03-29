import { CardsContainer, GithubIcon } from "./styles";

export const Cards = () => {
  return (
    <CardsContainer>
      <section id="mainCardContainer">
        <img
          src="https://images.unsplash.com/photo-1648484479126-10c313d3722d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Gica"
          id="cardImage"
        />

        <section id="cardTextContainer">
          <h3>Something is written here</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            corrupti in ad quae voluptate suscipit perferendis odit. Suscipit
            doloribus magnam, laborum necessitatibus aspernatur incidunt quo
            perspiciatis ullam dignissimos sapiente laudantium.lore
          </p>
          <a href="https://github.com/Takkuya/Basic-blog">
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
