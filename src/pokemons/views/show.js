import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "../../utils/customAxios";
import "../type.js";

export default function PokemonsShow() {
  const [pokemon, setPokemon] = useState();

  /** @type {{ pokemonID: string }} */
  const { pokemonID } = useParams();

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

  if (!pokemon) return <></>;

  /** @type {PokemonData} */
  const {
    code,
    name,
    isLegendary,
    height,
    weight,
    description,
    discoveredDate,
    photos,
  } = pokemon;

  return (
    <main className="container">
      <p>{name}</p>
      <p>{description}</p>
    </main>
  );
}
