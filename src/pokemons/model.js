import { getFirestore, collection as dbCollection } from "firebase/firestore";
import EntityModel from "../utils/entity.js";
import { firebaseApp } from "../../firebaseApp.js";
import ModelError from "../utils/modelError.js";
import "./type.js";

const converter = {
  /** @type {(pokemon: PokemonData) => PokemonData} */
  toFirestore: (pokemon) => pokemon,
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Pokemon(data);
  },
};

// Get a reference to the database service
const db = getFirestore(firebaseApp);
const collection = dbCollection(db, "pokemons").withConverter(converter);

export default class Pokemon extends EntityModel {
  /** @type {CollectionReference} Collection to be used in firebase. */
  static collection = collection;

  constructor(/** @type {PokemonData} */ data) {
    super();

    /** @type {CollectionReference} Collection to be used in firebase. */
    this.collection = collection;

    /** @type {PokemonData["code"]} The pokemon numeric code. Ex: "001". */
    this.code = data.code;

    /** @type {PokemonData["name"]} The common name of the pokemon. */
    this.name = data.name;

    /** @type {PokemonData["isLegendary"]} Indicates whether the pokemon is legendary or not. */
    this.isLegendary = data.isLegendary;

    /** @type {PokemonData["description"]} Small description of the creature. */
    this.description = data.description;

    /** @type {PokemonData["weight"]} Estimated weight of the creature in kilograms. */
    this.weight = data.weight;

    /** @type {PokemonData["height"]} Estimated height of the creature in meters. */
    this.height = data.height;

    /** @type {PokemonData["discoveredDate"]} Date when the pokemon was first discovered. */
    this.discoveredDate = data.discoveredDate;

    /** @type {PokemonData["photos"]} Pictures taken of the pokemon. */
    this.photos = data.photos;
  }

  /**
   * Return the current values of the model as a key-ed object.
   * @type {PokemonData}
   */
  get values() {
    return {
      code: this.code,
      name: this.name,
      isLegendary: this.isLegendary,
      description: this.description,
      weight: this.weight,
      height: this.height,
      discoveredDate: this.discoveredDate,
      photos: this.photos,
    };
  }

  /**
   * Ensure the attributes of the model contain the proper values. Throw a
   * ModelError is one or multiple fields is not correct.
   */
  async validate() {
    const errors = {};

    if (!this.code) {
      errors.code = "The short code field is necessary.";
    } else {
      const code = this.code;
      const docsWithSameCode = await Pokemon.find({ code });
      if (docsWithSameCode.length > 0)
        errors.code = "There is already another element with that code.";
    }
    if (this.name === undefined || this.name === "") {
      errors.name = "The name field is necessary.";
    }
    if (this.isLegendary === undefined) {
      errors.isLegendary = "The recommendation field is necessary.";
    }
    if (!this.discoveredDate) {
      errors.discoveredDate = "The discovered date field is necessary.";
    }
    if (Object.keys(errors).length) {
      throw new ModelError("The model contains invalid data.", errors);
    }
  }
}
