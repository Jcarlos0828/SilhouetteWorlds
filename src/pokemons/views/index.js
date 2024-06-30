import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "../../utils/customAxios";
import PokemonSummary from "./_summary";

/** List of all the pokemons. */
export default function PokemonsIndex() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const resGet = await axios.get("pokemons").catch((err) => err);
    if (resGet instanceof Error) {
      alert(resGet.message);
      setData(null);
      return;
    }
    setData(resGet.data);
  }

  useEffect(() => fetchData(), []);

  return (
    <main id="pokemons-index" className="container p-3">
      <h1 className="text-center">Pokemon list</h1>

      <div className="flex-grow-1 mb-2">
        {data?.map((pokemon, idx) => (
          <PokemonSummary key={`pokemon-${idx}`} {...{ pokemon, fetchData }} />
        ))}
      </div>

      <Link to="/new" className="text-right">
        <button className="btn btn-lg btn-warning">Register Pokemon</button>
      </Link>
    </main>
  );
}
