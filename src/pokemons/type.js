/**
 * @typedef {Object} PokemonData
 * @property {string} [id] - The Firestore ID.
 * @property {string} code - The pokemon numeric code. Ex: "001".
 * @property {string} name - The common name of the pokemon.
 * @property {boolean} [isLegendary] - Indicates whether the pokemon is legendary or not.
 * @property {number} [height] - Estimated height of the creature in meters.
 * @property {number} [weight] - Estimated weight of the creature in kilograms.
 * @property {string} [description] - Small description of the creature.
 * @property {Date} [discoveredDate] - Date when the pokemon was first discovered.
 * @property {Array<string>} [photos] - Pictures taken of the pokemon.
 */
