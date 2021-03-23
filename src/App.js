import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/pages/landing";
import Matches from "./components/pages/matches";
import Events from "./components/pages/events";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/matches/:id" component={Matches} />
          <Route exact path="/events/:id" component={Events} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
