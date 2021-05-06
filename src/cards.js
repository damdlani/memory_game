import { nanoid } from "nanoid";
import { shuffleArray } from "./shuffleArray";
import { useColors } from "./useColors";

export const GenerateCards = () => {
  const { generateRandomColor } = useColors();

  const colors = []

  while(colors.length < 9){
    colors.push(generateRandomColor());
  }

  const cards = [
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[0],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[0],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[1],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[1],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[2],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[2],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[3],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[3],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[4],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[4],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[5],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[5],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[6],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[6],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[7],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[7],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[8],
    },
    {
      id: nanoid(),
      covered: false,
      off: false,
      blocked: false,
      color: colors[8],
    },
  ];
  
  shuffleArray(cards);

  return cards;
}