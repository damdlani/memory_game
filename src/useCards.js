import { useEffect, useState } from "react";
import { GenerateCards } from "./cards";
import { twoCardsUncoveredTime } from "./utils";

export const useCards = (cardsNumber) => {
  const [cards, setCards] = useState(GenerateCards(cardsNumber));
  const [activeCards, setActiveCards] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const blockCardsWhileComparing = () => {
    if (activeCards.length === 2) {
      setCards((cards) =>
        cards.map((card) => {
          return { ...card, blocked: true };
        })
      );
    }
    return;
  };

  const markPairedCardsOff = () => {
    setCards((cards) =>
      cards.map((card) => {
        if (activeCards.find(({ id }) => id === card.id)) {
          return { ...card, off: true };
        }
        return { ...card, blocked: false };
      })
    );
  };

  const coverNotPairedCards = () => {
    setCards((cards) =>
      cards.map((card) => {
        if (card.off === false) {
          return { ...card, covered: true, blocked: false };
        }
        return { ...card, covered: false };
      })
    );
  };

  const compareActiveCards = () => {
    if (activeCards.length < 2) return;

    if (activeCards[0].color === activeCards[1].color) {
      setTimeout(() => {
        markPairedCardsOff();
      }, twoCardsUncoveredTime);
      setActiveCards([]);
    }

    if (activeCards[0].color !== activeCards[1].color) {
      setTimeout(() => {
        coverNotPairedCards();
      }, twoCardsUncoveredTime);

      setActiveCards([]);
    }
  };

  useEffect(() => {
    compareActiveCards();
    blockCardsWhileComparing();
  }, [activeCards]);

  const updateActiveCards = (cardData) => {
    setActiveCards((activeCards) => [
      ...activeCards,
      { ...cardData, covered: false },
    ]);
  };

  return {
    cards,
    setCards,
    activeCards,
    updateActiveCards,
    clickCount,
    setClickCount,
  };
};
