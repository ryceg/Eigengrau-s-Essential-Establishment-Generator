function createStory () {
  /**
   * Stores the story state.
   * @type {Object.<string, any>}
   */
  const state = {}

  return {
    /**
     * Gets a value from the story.
     * @param {string} name
     */
    get (name) {
      if (name in state) {
        return state[name]
      }
      throw new ReferenceError(`The variable ${name} does not exist.`)
    },
    /**
     * Stores a value in the story.
     * @param {string} name
     * @param {any} value
     */
    set (name, value) {
      state[name] = value
    }
  }
}

export default createStory()
