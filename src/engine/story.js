/**
 * Stores the story state.
 * @type {Object.<string, any>}
 */
const story = {}

/**
 * Gets a value from the story.
 * @param {string} name
 */
export function get (name) {
  if (name in story) {
    return story[name]
  }
  throw new ReferenceError(`The variable ${name} does not exist.`)
}

/**
 * Stores a value in the story.
 * @param {string} name
 * @param {any} value
 */
export function set (name, value) {
  story[name] = value
  return value
}

/**
 * Removes a value from the story.
 * @param {string} name
 */
export function unset (name) {
  if (name in story) {
    delete story[name]
  }
  throw new ReferenceError(`The variable ${name} does not exist.`)
}
