import { StyledBoard, Container, Nav } from "./styled";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { useCards } from "../useCards";
import { useTime } from "../useTime";
import { presentationTime } from "../utils";
import { Result } from "./Result";
import { StyledLink } from "../common/StyledLink";


export const MainPage = ({ cardsNumber }) => {
  const { cards, setCards, updateActiveCards, clickCount, setClickCount } =
    useCards(cardsNumber);
  const { getEndDate, calculateTime } = useTime();
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!cards.some(({ off }) => off === false)) {
      getEndDate();
      setFinished(true);
    }
  }, [cards]);

  useEffect(() => {
    setTimeout(() => {
      setCards((cards) =>
        cards.map((card) => {
          return { ...card, covered: true };
        })
      );
    }, presentationTime);
  }, []);

  return (
    <Container>
      <Nav>
        <StyledLink to="/memory_game">Home</StyledLink>
      </Nav>

      <StyledBoard>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            updateActiveCards={updateActiveCards}
            setCards={setCards}
            setClickCount={setClickCount}
          ></Card>
        ))}
        {finished && <Result time={calculateTime()} clickCount={clickCount} />}
      </StyledBoard>
    </Container>
  );
};
