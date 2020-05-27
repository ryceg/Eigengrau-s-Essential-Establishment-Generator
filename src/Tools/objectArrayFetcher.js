/**
 * Fetches a random value from an object
 * Used to fetch when it's not important which it fetches;
 * any random tavern, or any random Patreon character.
 */
setup.objectArrayFetcher = target => {
  return Object.values(target).random()
}
