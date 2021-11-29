import { Route, Switch } from "react-router";
import Home from "./pages/Home";
function App() {
  return (
    <Switch>
      <Route>
        <Home exact path = "/" />
      </Route>
    </Switch>
  )
}

export default App;
