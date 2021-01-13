export const urlSeed = () => {
  const seed = getValidSeed(location.hash.replace('#', ''))

  console.log(`Setting the location hash to ${seed}`)
  State.metadata.set('seed', seed)
  location.hash = seed

  console.log('Spinning up PRNG')
  State.prng.init(seed)
}

$(document).one(':enginerestart', () => {
  console.log('Creating a new seed...')
  location.hash = createSeed()
  console.log('Restarting the engine...')
})

/**
 * Validates and adjust a seed.
 * @param seed - Seed to validate/adjust.
 * @returns A valid seed.
 */
function getValidSeed (seed: string): string {
  if (seed.length <= 0) {
    console.log('Creating a seed...')
    return createSeed()
  }

  if (seed.length <= 16) {
    console.warn(`Seed not long enough! Appending some filler to ${seed}...`)
    return seed + createSeed()
  }

  return seed
}

/**
 * Creates a new seed.
 */
function createSeed () {
  const { adjectives, animals } = lib.urlData
  return `${adjectives.random()}${adjectives.random()}${animals.random()}`
}
