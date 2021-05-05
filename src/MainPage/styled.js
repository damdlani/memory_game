import styled from "styled-components";

export const StyledBoard = styled.main`
position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;

export const StyledCard = styled.button`
  flex-basis: 15%;
  flex-grow: 1;
  height: 30vh;
  background-color: ${({ color, covered, off }) => {
    if (off) return "green";
    if (covered) return "black";
    return color;
  }};
  border: 1px solid wheat;
  transition: background-color 0.3s ease;

  :hover {
    cursor: ${({ off, covered }) => {
      if (off || !covered) return "not-allowed";
      return "pointer";
    }};
  }

  @media (orientation: portrait) {
    flex-basis: 33%;
    flex-grow: 1;
    height: 15vh;
  }
`;
