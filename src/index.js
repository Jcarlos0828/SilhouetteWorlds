import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Hello from "./hello/view";
import PokemonRoutes from "./pokemons/view";

ReactDOM.render(
  <Router>
    <StrictMode>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/pokemons" component={PokemonRoutes} />
      </Switch>
    </StrictMode>
  </Router>,
  document.getElementById("root")
);
