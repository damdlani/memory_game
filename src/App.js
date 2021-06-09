import { MainPage } from "./MainPage/MainPage";
import { Switch, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { difficultyLevels } from "./difficultyLevels";

function App() {
  const { easy, medium, hard } = difficultyLevels;

  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/easy">
            <MainPage cardsNumber={easy} />
          </Route>
          <Route path="/medium">
            <MainPage cardsNumber={medium} />
          </Route>
          <Route path="/hard">
            <MainPage cardsNumber={hard} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
