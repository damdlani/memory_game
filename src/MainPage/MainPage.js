import { StyledBoard } from "./styled";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { useCards } from "../useCards";
import { useTime } from "../useTime";
import { presentationTime } from "../utils";
import { Result } from "./Result";

export const MainPage = () => {
  const {
    cards,
    setCards,
    updateActiveCards,
    clickCount,
    setClickCount,
  } = useCards();
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
  );
};
