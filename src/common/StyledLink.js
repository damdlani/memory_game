import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  padding: 20px 10px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: #008080;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.3);
  }
`;
