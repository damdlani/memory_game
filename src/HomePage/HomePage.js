import { StyledLink } from "../common/StyledLink";
import { ListItem, Title, Container, Subtitle } from "./styled";

export const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to Memory game</Title>
      <Subtitle>Choose level:</Subtitle>
      <ul>
        <ListItem>
          <StyledLink to="/easy">Easy</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/medium">Medium</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/hard">Hard</StyledLink>
        </ListItem>
      </ul>
    </Container>
  );
};
