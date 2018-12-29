/* global setup */
setup.createBrothel = function (town, tavern) {
  console.log('Creating a brothel...')
  let brothel = setup.createBuilding(town, 'brothel')
  // if (tavern.hasBrothel) {
  //   brothel = tavern
  // } else {
  //   brothel = setup.createBuilding(town, 'brothel')
  // }
  Object.assign(brothel, {
    name: setup.brothel.name.random(),
    passageName: 'BrothelOutput',
    initPassage: 'BrothelOutput',
    BuildingType: 'brothel',
    wordNoun: ['brothel', 'whorehouse', "gentleman's club"].random(),
    specialty: setup.brothel.specialty.random(),
    talk: setup.brothel.talk.random(),
    rumour: setup.brothel.rumour.random(),
    notice: setup.brothel.notice.random(),
    owner: [
      'a mean old madam',
      'a large madam with a no-nonsense attitude',
      'a warm motherly figure',
      'a surly brute',
      'a tyrannical and cruel fellow',
      'a sultry seductress',
      'a charming witch'].random()
  })
  brothel.notableFeature = brothel.specialty + ' and being owned by ' + brothel.owner

  // to do: add bed cleanliness. Steal it from tavern.
  var rollDataVariables = ['wealth', 'size', 'cleanliness']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(brothel, setup.brothel.rollData, propName)
  })
  brothel.wealth = ''
  brothel.size = ''
  brothel.cleanliness = ''

  switch (brothel.owner) {
    case 'a mean old madam':
      brothel.pimp = setup.createNPC(town, { age: 'venerable', gender: 'woman', title: 'Mistress', demeanour: 'mean', profession: 'pimp' })
      break
    case 'a large madam with a no-nonsense attitude':
      brothel.pimp = setup.createNPC(town, { gender: 'woman', title: 'Mistress', weight: 'plump', demeanour: 'sensible', profession: 'pimp' })
      break
    case 'a warm motherly figure':
      brothel.pimp = setup.createNPC(town, { gender: 'woman', title: 'Mistress', weight: 'plump', demeanour: 'kind', profession: 'pimp' })
      break
    case 'a surly brute':
      brothel.pimp = setup.createNPC(town, { gender: 'man', title: 'Master', weight: 'muscular', demeanour: 'mean', profession: 'pimp' })
      break
    case 'a tyrannical and cruel fellow':
      brothel.pimp = setup.createNPC(town, { gender: 'man', title: 'Master', age: 'middle-aged', demeanour: 'mean', profession: 'pimp' })
      break
    case 'a sultry seductress':
      brothel.pimp = setup.createNPC(town, { gender: 'woman', title: 'Mistress', age: 'relatively young', demeanour: 'flirtatious', profession: 'pimp' })
      break
    case 'a charming witch':
      brothel.pimp = setup.createNPC(town, { gender: 'woman', title: 'Mistress', age: 'relatively young', dndClass: 'sorcerer', profession: 'pimp' })
  }

  brothel.pimp.greeting = ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'sizes you up, before $pimp.heshe nods at you', 'checks you out for just a moment before smiling at you']
  console.log(brothel)
  // setup.townBinder(town, brothel, 'brothel')
  return brothel
}
