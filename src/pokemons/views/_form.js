import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../type.js";

import {
  useFormState,
  getFormStateValues,
  handleFormStateErrors,
} from "../../utils/customStates";

/**
 * @typedef {Object} PokemonForm
 * @property {PokemonData} pokemon
 * @property {(pokemon: PokemonData) => void} action
 */

/** Template form for the different type of fields. */
export default function PokemonForm(
  /** @type {PokemonForm} */ { pokemon, action }
) {
  const history = useHistory();

  const code = useFormState(pokemon?.code || "");
  const name = useFormState(pokemon?.name || "");
  const isLegendary = useFormState(pokemon?.isLegendary || false);
  const weight = useFormState(pokemon?.weight);
  const height = useFormState(pokemon?.height);
  const description = useFormState(pokemon?.description);
  const discoveredDate = useFormState(
    pokemon?.discoveredDate ? new Date(pokemon.discoveredDate) : new Date()
  );
  const photos = useFormState(pokemon?.photos || []);

  const [generalError, setGeneralError] = useState("");

  const fieldsObj = {
    code,
    isLegendary,
    name,
    height,
    weight,
    description,
    discoveredDate,
    photos,
  };

  async function savePokemon(e) {
    e.preventDefault();

    const confirmMessage = `The pokemon ${code.val} will be saved. Continue?`;
    if (!window.confirm(confirmMessage)) return;

    /** @type {PokemonData} */
    const data = getFormStateValues(fieldsObj);
    const resAction = await action(data).catch((err) => err);
    if (resAction instanceof Error) {
      handleFormStateErrors(resAction, fieldsObj, setGeneralError);
      return;
    }
  }

  const photoUrls = photos.val.map((/** @type {Blob | MediaSource} */ p) =>
    URL.createObjectURL(p)
  );

  return (
    <form onSubmit={savePokemon} className="col- col-md-6 mb-4">
      <div className="flex-grow-1 form-content">
        <div className="form-group mb-4 mt-4 p-0">
          <input
            type="text"
            className="w-100 form-control"
            placeholder="Short code description"
            value={code.val}
            onChange={(e) => code.setVal(e.target.value)}
          />
          <label className="form-label">Pokemon code</label>
          <small className="text-danger">{code.err}</small>
        </div>

        <div className="form-group mb-4 mt-4 p-0">
          <input
            type="text"
            className="w-100 form-control"
            placeholder="Pokemon name"
            value={name.val}
            onChange={(e) => name.setVal(e.target.value)}
          />
          <label className="form-label">Pokemon name</label>
          <small className="text-danger">{name.err}</small>
        </div>

        <div className="form-group mb-4 mt-4 p-0">
          <textarea
            type="textarea"
            className="w-100 form-control"
            placeholder="Test description"
            value={description.val}
            onChange={(e) => description.setVal(e.target.value)}
          />
          <label className="form-label">Test description</label>
          <small className="text-danger">{description.err}</small>
        </div>

        <div className="custom-control custom-switch pb-4 mb-4">
          <input
            type="checkbox"
            className="custom-control-input"
            id="boolean-field"
            checked={isLegendary.val}
            onChange={() => isLegendary.setVal(!isLegendary.val)}
          />
          <label className="custom-control-label" htmlFor="boolean-field">
            Is it a legendary Pokemon?
          </label>
          <p className="text-danger">{isLegendary.err}</p>
        </div>

        <div className="form-group mb-4 mt-4 p-0">
          <input
            type="number"
            className="w-100 form-control"
            placeholder="How much did it cost?"
            value={height.val}
            onChange={(e) => height.setVal(e.target.value)}
          />
          <label className="form-label">How tall is it?</label>
          <small className="text-danger">{height.err}</small>
        </div>

        <div className="form-group mb-0 mt-4 p-0" style={{ zIndex: "10" }}>
          <DatePicker
            selected={discoveredDate.val}
            onChange={(d) => discoveredDate.setVal(d)}
            dateFormat="dd/MM/yyyy"
            className="col-12"
          />
          <label className="form-label date-label">
            When was it discovered?
          </label>
          <small className="text-danger">{discoveredDate.err}</small>
        </div>

        <div className="form-group">
          <label className="w-100">Photos!!:</label>
          <div>
            {photoUrls.map((p, idx) => (
              <figure className="d-flex mb-1" key={idx}>
                <img src={p} className="flex-grow-1" alt="" />
              </figure>
            ))}
          </div>
          <div className="custom-file w-100">
            <input
              type="file"
              multiple
              className="custom-file-input"
              onChange={(e) =>
                photos.setVal(photos.val.concat(Object.values(e.target.files)))
              }
            />
            <label className="custom-file-label">
              Click to upload new photo
            </label>
          </div>
          <small className="text-danger">{photos.err}</small>
        </div>

        <small className="text-danger">{generalError}</small>
      </div>

      <div className="bottom-buttons">
        <button type="submit" className="btn btn-lg bg-primary text-light mr-3">
          Save Pokemon
        </button>

        <button
          type="button"
          onClick={() => {
            const confirmMessage = `Cancel changes? Any unsaved data will be lost.`;
            if (!window.confirm(confirmMessage)) return;
            history.goBack();
          }}
          className="btn btn-lg bg-danger text-light"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
