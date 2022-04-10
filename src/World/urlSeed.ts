const RESET_SEED = 'resetSeed'

/**
 * This handles the allocation of a new URL seed.
 */
export const urlSeed = () => {
  const params = new URLSearchParams(document.location.search)
  let origSeed = params.get('seed')
  if (recall(RESET_SEED, false)) {
    origSeed = null
    forget(RESET_SEED)
  }
  const seed = getValidSeed(origSeed)
  if (origSeed !== seed) {
    params.set('seed', seed)
    document.location.search = params.toString()
  }

  State.prng.init(seed)
  lib.logger.info(`Spinning up PRNG with "${State.prng.seed}"`)
}

/** This tells the engine that it needs to generate a new seed. */
$(document).one(':enginerestart', () => {
  memorize(RESET_SEED, true)
})

/**
 * Validates and adjust a seed.
 * @param seed - Seed to validate/adjust.
 * @returns A valid seed.
 */
function getValidSeed (seed: string | null): string {
  if (!seed) seed = createSeed()
  if (seed.length <= 0) {
    lib.logger.info('Creating a seed...')
    seed = createSeed()
  }
  if (seed.length <= 16) {
    lib.logger.warn(`Seed not long enough! Appending some filler to ${seed}...`)
    seed += createSeed()
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

const passageExists = (key: string): boolean => {
  if (Story.has(key)) return true
  return false
}

export function navigateToObj () {
  const hash = document.location.hash.replace('#', '')
  if (hash) {
    if (passageExists(hash)) {
      setup.history(State.variables.town, hash, hash)
      Engine.play(hash)
    } else if (setup.findIfExistsViaKey(hash) === true) {
      const obj = setup.findViaKey(hash)
      State.variables.currentPassage = obj
      setup.history(obj, obj.passageName, obj.name)
      Engine.play(obj.passageName)
    } else {
      removeHash()
    }
  }
}

function removeHash () {
  history.pushState('', document.title, window.location.pathname + window.location.search)
  $(document).trigger({
    type: ':notify',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    message: 'Sorry, unfortunately this key was not linked to a pregenerated object; linking only works to building owners that are generated at start with no user interaction.',
    delay: 8000,
    classes: false
  })
}
