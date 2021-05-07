import styled from "styled-components";

export const StyledBoard = styled.main`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;

export const StyledCard = styled.button`
  font-size: 40px;
  color: white;
  flex-basis: 15%;
  flex-grow: 1;
  height: 30vh;
  background: ${({ color, covered, off }) => {
    if (off) return "rgb(0, 185, 0)";
    if (covered) return `rgb(0, 0, 0)`;
    return color;
  }};
  border: 2px solid rgb(255, 255, 255);
  transition: 0.3s ease;

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
