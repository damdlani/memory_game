import { StyledLink } from "../common/StyledLink";
import { ListItem, Title, Container, Subtitle } from "./styled";

export const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to Memory game</Title>
      <Subtitle>Choose level:</Subtitle>
      <ul>
        <ListItem>
          <StyledLink to="/memory_game/easy">Easy</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/memory_game/medium">Medium</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/memory_game/hard">Hard</StyledLink>
        </ListItem>
      </ul>
    </Container>
  );
};
