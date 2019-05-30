const createAlchemist = town => {}

/**
 * @param {*} story - Holds all shared story information.
 */
export function Alchemist (story) {
  story.alchemist = createAlchemist(story.town)
}
