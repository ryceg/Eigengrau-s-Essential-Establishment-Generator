/**
 * Fetches a random key from an object
 * Used to fetch when it's not important which it fetches;
 * any random tavern, or any random Patreon character.
 */
setup.objectArrayFetcher = function (target, args) {
  const key = Object.keys(target)
  const index = random(0, key.length)
  return target[key[index]] || target[key[0]]
  // (args) || target[key[index]]
}
