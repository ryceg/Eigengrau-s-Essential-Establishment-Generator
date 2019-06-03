/**
 * Stores the story state.
 * @type {Object.<string, any>}
 */
const state = {}

/**
 * Gets a value from the story.
 * @param {string} name
 */
export function get (name) {
  if (name in state) {
    return state[name]
  }
  throw new ReferenceError(`The variable ${name} does not exist.`)
}

/**
 * Stores a value in the story.
 * @param {string} name
 * @param {any} value
 */
export function set (name, value) {
  state[name] = value
}
