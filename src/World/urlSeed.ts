/**
 * This handles the allocation of a new URL seed.
 */
export const urlSeed = () => {
  const url = new URL('https://eigengrausgenerator.com/?seed=crazyrandomdogorsomething')
  const params = new URLSearchParams(url.search)

  const seed = getValidSeed(params.get('seed'))
  console.log(`Setting the location hash to ${seed}`)
  params.set('seed', seed)
  location.search = params.toString()

  console.log('Spinning up PRNG')
  State.prng.init(seed)
}

$(document).one(':enginerestart', () => {
  console.log('Creating a new seed...')
  location.search = createSeed()
  console.log('Restarting the engine...')
})
/**
 * Validates and adjust a seed.
 * @param seed - Seed to validate/adjust.
 * @returns A valid seed.
 */
function getValidSeed (seed: string | null): string {
  if (!seed) seed = createSeed()
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
