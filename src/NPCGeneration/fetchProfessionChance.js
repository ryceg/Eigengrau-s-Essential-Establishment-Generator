setup.fetchProfessionChance = function (town, npc) {
  // This gets the starting profession when a profession has not been defined.
  console.log('Fetching profession...')
  town = town || State.variables.town
  const professions = Object.keys(town.professions)

  if (npc.socialClass) {
    console.log(`Social class was defined as ${npc.socialClass}, so filtering to the available professions!`)
    professions.filter(profession => {
      return town.professions[profession].socialClass === npc.socialClass
    })
    console.log(professions)
  }

  if (setup.breakGenderNorms(town, npc) === false) {
    if (setup.isDominantGender(town, npc) === false) {
      professions.filter(profession => {
        return town.professions[profession].domSub !== 'dom'
      })
    } else {
      professions.filter(profession => {
        return town.professions[profession].domSub !== 'sub'
      })
    }
  }
  const sum = professions.map(profession => {
    return town.professions[profession].population
  })
  let totalWeight = 0
  sum.forEach(single => {
    totalWeight += single
  })
  let random = Math.floor(randomFloat(1) * totalWeight)
  let index
  for (let i = 0; i < sum.length; i++) {
    random -= sum[i]
    if (random < 0) {
      index = i
      break
    }
  }
  let resultantProfession = professions[index]
  if (resultantProfession === undefined) {
    console.error('Failed to fetch a profession.')
    console.log({ npc })
    resultantProfession = 'noble'
  }
  console.log(`Profession is: ${resultantProfession}`)
  // the on-load function is handled in setup.createClass because it should apply to *every* NPC with the profession, not just those that are rolled with it
  if (lib.professions[resultantProfession].exclusions) {
    if (typeof lib.professions[resultantProfession].exclusions === 'function') {
      console.log('There is an exclusion function. Testing...')
      if (lib.professions[resultantProfession].exclusions(town, npc) === false) {
        console.error(`${npc.name} is unable to be a ${resultantProfession}. Rerolling...`)
        resultantProfession = setup.fetchProfessionChance(town, npc)
      }
    }
  }

  console.log(`Testing to see whether ${resultantProfession} is a dndClass.`)

  if (lib.professions[resultantProfession].type !== undefined) {
    if (lib.professions[resultantProfession].type === 'dndClass') {
      console.log(`${npc.name} is a ${resultantProfession} and therefore has a dndClass.`)
      npc.hasClass = true
    } else {
      console.log(`${npc.name} is a ${resultantProfession} and therefore does not have a dndClass.`)
      npc.hasClass = false
    }
  } else {
    console.error(`${resultantProfession} is not a valid profession!`)
  }

  return resultantProfession
}
