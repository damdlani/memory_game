import { StyledBoard, Container } from "./styled";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { useCards } from "../useCards";
import { useTime } from "../useTime";
import { presentationTime } from "../utils";
import { Result } from "./Result";
import { Link } from "react-router-dom";

export const MainPage = ({cardsNumber}) => {
  const {
    cards,
    setCards,
    updateActiveCards,
    clickCount,
    setClickCount,
  } = useCards(cardsNumber);
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
      <Link to="/">Home</Link>
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
