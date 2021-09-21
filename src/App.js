import "./App.css";
import Home from "./Components/Home/Home";
import Characters from "./Components/Characters";
import Story from "./Components/Story";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
          <Route exact path="/story">
            <Story />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
