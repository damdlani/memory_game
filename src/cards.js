import { nanoid } from "nanoid";
import { shuffleArray } from "./shuffleArray";
import { useColors } from "./useColors";

export const GenerateCards = (cardsNumber) => {
  const { generateRandomColor } = useColors();
 
  const cards = [];
  const colors = [];

  while (colors.length < (cardsNumber / 2) ) {
    colors.push(generateRandomColor());
  }
  colors.push(...colors);

  colors.forEach((color) => {
    cards.push({
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color,
    });
  });

  shuffleArray(cards);

  return cards;
};
