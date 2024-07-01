import { Link } from "react-router-dom";
import deleteIcon from "../../assets/delete_white_24dp.svg";
import editIcon from "../../assets/edit_white_24dp.svg";

import axios from "../../utils/customAxios.js";

/**
 * @typedef {Object} PokemonSummary
 * @property {PokemonData} pokemon
 * @property {() => void} fetchData
 */

/** List of all the pokemon instances. */
export default function PokemonSummary(
  /** @type {PokemonSummary} */ { pokemon, fetchData }
) {
  const {
    id,
    code,
    name,
    isLegendary,
    height,
    weight,
    description,
    discoveredDate,
    photos,
  } = pokemon;

  async function removePokemon() {
    const confirmMessage = `The pokemon ${id} will be removed. Continue?`;
    if (!window.confirm(confirmMessage)) return;

    const resDelete = await axios.delete("pokemons/" + id).catch((err) => err);
    if (resDelete instanceof Error) {
      alert(resDelete.response.data.msg);
      return;
    }

    const successResMsg = resDelete.data.msg;
    alert(successResMsg);

    fetchData();
  }

  return (
    <figure className="summary bg-secondary">
      <Link
        to={"/" + pokemon.id}
        className="content"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex-grow-1">
          <p>{code}</p>
          <p>{name}</p>
          <p>{isLegendary}</p>
          <p>{height}</p>
          <p>{description}</p>
          <p>{discoveredDate.toString()}</p>
        </div>
      </Link>

      <div className="d-flex justify-content-end icons">
        <Link to={`/${id}/edit`} className="edit-button">
          <img src={editIcon} alt="delete" />
        </Link>

        <button onClick={() => removePokemon()} className="delete-button">
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
    </figure>
  );
}
