setup.urlSeed = function (seed) {
  if (location.hash.length > 16) {
    // console.log('Creating a new seed...')
    seed = setup.urlData.adjectives.random() + setup.urlData.adjectives.random() + setup.urlData.animals.random()
    seed = location.hash
  } else if (location.hash.length <= 16) {
    console.error(`Seed not long enough! Appending some filler to ${location.hash}...`)
    seed += setup.urlData.adjectives.random() + setup.urlData.adjectives.random() + setup.urlData.animals.random()
  } else {
    console.log('Creating a seed...')
    seed = setup.urlData.adjectives.random() + setup.urlData.adjectives.random() + setup.urlData.animals.random()
  }

  console.log(`Setting the location hash to ${seed}`)
  State.metadata.set('seed', seed)
  location.hash = seed

  console.log(`Spinning up PRNG`)
  State.prng.init(location.hash)
}

$(document).one(':enginerestart', function (ev) {
  console.log('Creating a new seed...')
  location.hash = setup.urlData.adjectives.random() + setup.urlData.adjectives.random() + setup.urlData.animals.random()
  console.log(`Restarting the engine...`)
})
