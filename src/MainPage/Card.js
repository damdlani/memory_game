import React, { useEffect, useState } from "react";
import { StyledCard } from "./styled";

export const Card = ({
  card,
  setCards,
  updateActiveCards,
  setClickCount
}) => {
  const { color, covered, off, blocked, id } = card;

  const updateCards = () => {
    setCards((cards) =>
      cards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            covered: !covered,
          };
        }
        return card;
      })
    );
  };

  const onClickHandle = () => {
    updateCards();
    updateActiveCards(card);
    setClickCount(count => count + 1);
    
  };

  return (
    <StyledCard
      color={color}
      covered={covered}
      off={off}
      disabled={!covered || blocked || off}
      onClick={onClickHandle}
    ></StyledCard>
  );
};
