import styled from "styled-components";
import React from "react";

const ResultBox = styled.div`
  position: absolute;
  z-index: 3;
  padding: 30px;
  background-color: rgba(236, 236, 236, 0.8);
  width: 100%;
  height: 100%;
  text-align: center;
`;
const ResultP = styled.p`
  text-align: center;
  font-size: 34px;
  /* margin-top: 30px; */
  padding: 30px 15px 10px;
`;
const TryAgain = styled.button`
  margin: 20px;
  padding: 20px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const Result = ({ time, clickCount }) => {
  return (
    <ResultBox>
      <ResultP>You finished in {time} {time >= 2 ? 'seconds' : 'second'}!</ResultP>
      <ResultP>Attempts: {clickCount / 2}</ResultP>
      <TryAgain onClick={() => window.location.reload()}>
        Try again &nbsp;
        <i class="fas fa-redo"></i>
      </TryAgain>
    </ResultBox>
  );
};
