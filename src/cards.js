import { nanoid } from "nanoid";
import { shuffleArray } from "./shuffleArray";

const cards = [
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "gray",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "lightgreen",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "brown",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "purple",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "lightgreen",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "violet",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "brown",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "violet",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "purple",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "gray",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "pink",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "yellow",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "pink",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "yellow",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "blue",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "red",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "red",
  },
  {
    id: nanoid(),
    covered: false,
    off: false,
    blocked: false,
    color: "blue",
  },
];

shuffleArray(cards);

export default cards;