import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-width: 80vw;
  margin: 0 auto;
  padding-top: 10px;
`;

export const StyledBoard = styled.main`
  position: relative;
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 20px auto;

  @media (orientation: portrait) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledCard = styled.button`
  font-size: 40px;

  color: ${({ color, off, covered }) => {
    if (off) return "rgb(255, 255, 255)";
    if (covered) return `rgb(0, 0, 0)`;
    return color;
  }};

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
`;
export const Nav = styled.nav`
  text-align: right;
`;

