import React from "react";
import { useHistory } from "react-router-dom";

import axios from "../../utils/customAxios.js";
import PokemonForm from "./_form.js";

/** View for new pokemon instance. */
export default function PokemonsNew() {
  const history = useHistory();

  async function createPokemon(/** @type {PokemonData} */ pokemon) {
    // const config = { headers: { "Content-Type": "multipart/form-data" } };
    const resPokemon = await axios.post("pokemons", pokemon);

    const successResponseMsg = resPokemon.data.msg;
    alert(successResponseMsg);
    history.push(`/pokemons/${resPokemon.data.id}`);

    return resPokemon;
  }

  return (
    <main id="pokemons-new" className="container p-3 align-items-center">
      <PokemonForm action={createPokemon} />
    </main>
  );
}
