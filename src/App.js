import { MainPage } from "./MainPage/MainPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { difficultyLevels } from "./difficultyLevels";

function App() {
  const {easy, medium, hard} = difficultyLevels;

  return (
    <Router>
      <div>

        <Switch>
          <Route path="/memory_game/easy">
            <MainPage cardsNumber={easy} />
          </Route>
          <Route path="/memory_game/medium">
            <MainPage cardsNumber={medium} />
          </Route>
          <Route path="/memory_game/hard">
            <MainPage cardsNumber={hard} />
          </Route>
          <Route path="/memory_game">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
