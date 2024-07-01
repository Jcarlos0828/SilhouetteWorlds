import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "../../utils/customAxios.js";
import PokemonForm from "./_form.js";

/** View for new pokemon instance. */
export default function PokemonsEdit() {
  const [pokemon, setPokemon] = useState();

  const { pokemonID } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchPokemons() {
      const resShow = await axios
        .get(`pokemons/${pokemonID}`)
        .catch((err) => err);
      if (resShow instanceof Error) {
        const { msg } = resShow.response.data;
        alert(msg);
      }
      setPokemon(resShow.data);
    }
    fetchPokemons();
  }, [pokemonID]);

  async function updatePokemon(pokemon) {
    // const config = { headers: { "Content-Type": "multipart/form-data" } };
    const resPokemon = await axios.post("pokemons", pokemon);

    const successResponseMsg = resPokemon.data.msg;
    alert(successResponseMsg);
    history.push(`/pokemons/${resPokemon.data.id}`);

    return resPokemon;
  }

  if (!pokemon) {
    return <></>;
  }

  return (
    <main id="edit-pokemon" className="container-fluid">
      <PokemonForm pokemon={pokemon} action={updatePokemon} />
    </main>
  );
}
