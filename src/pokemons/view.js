import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./views/styles.css";

import Index from "./views/index.js";
import New from "./views/new.js";
import Show from "./views/show.js";
import Edit from "./views/edit.js";

/** Switch de las diferentes vistas para una entidad. */
export default function EntitiesRoutes() {
  return (
    <BrowserRouter basename="/pokemons">
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/new" exact component={New} />
        <Route path="/:pokemonID" exact component={Show} />
        <Route path="/:pokemonID/edit" exact component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}
