import { CardsContainer } from "./styles";

export const Cards = () => {
  return (
    <CardsContainer>
      <section id="mainCardContainer">
        <img
          src="https://media.discordapp.net/attachments/369658605450035210/958243708833267712/unknown.png?width=1368&height=683"
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
        </section>
        <button>GitHub</button>
      </section>
    </CardsContainer>
  );
};
