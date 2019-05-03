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
    wordNoun: ['brothel', 'whorehouse', "gentleman's club", 'bordello', 'cathouse', 'house of ill-repute', 'massage parlor', 'den of vice'].random(),
    specialty: setup.brothel.specialty.random(),
    talk: setup.brothel.talk.random(),
    rumour: setup.brothel.rumour.random(),
    notice: setup.brothel.notice.random(),
    idle: setup.brothel.idle.random(),
    owner: [
      'a mean old madam',
      'a large madam with a no-nonsense attitude',
      'a warm motherly figure',
      'a surly brute',
      'a tyrannical and cruel fellow',
      'a sultry seductress',
      'a charming witch',
      'an incredibly well endowed woman',
      'a rugged and grizzled rogue'].random()
  })
  brothel.notableFeature = brothel.specialty + ' and being owned by ' + brothel.owner

  brothel.wealth = ''
  brothel.size = ''
  brothel.cleanliness = ''

  var rollDataVariables = ['wealth', 'size', 'cleanliness']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(brothel, setup.brothel.rollData, propName)
  })
//as title is already a value in npcData the title for the brothel owner appears as altTitle
  switch (brothel.owner) {
    case 'a mean old madam':
      brothel.pimp = setup.createNPC(town, { age: 'venerable', gender: 'woman', altTitle: 'Mistress', demeanour: 'mean', profession: 'pimp' })
      break
    case 'a large madam with a no-nonsense attitude':
      brothel.pimp = setup.createNPC(town, { gender: 'woman', altTitle: 'Mistress', weight: 'plump', demeanour: 'sensible', profession: 'pimp' })
      break
    case 'a warm motherly figure':
      brothel.pimp = setup.createNPC(town, { gender: 'woman', altTitle: 'Mistress', weight: 'plump', demeanour: 'kind', profession: 'pimp' })
      break
    case 'a surly brute':
      brothel.pimp = setup.createNPC(town, { gender: 'man', altTitle: 'Master', weight: 'muscular', demeanour: 'mean', profession: 'pimp' })
      break
    case 'a tyrannical and cruel fellow':
      brothel.pimp = setup.createNPC(town, { gender: 'man', altTitle: 'Master', age: 'middle-aged', demeanour: 'mean', profession: 'pimp' })
      break
    case 'a sultry seductress':
      brothel.pimp = setup.createNPC(town, { gender: 'woman', altTitle: 'Mistress', age: 'relatively young', demeanour: 'flirtatious', profession: 'pimp' })
      break
    case 'a charming witch':
      brothel.pimp = setup.createNPC(town, { gender: 'woman', altTitle: 'Mistress', age: 'relatively young', dndClass: 'sorcerer', profession: 'pimp' })
      break
    case 'an incredibly well endowed woman':
      brothel.pimp = setup.createNPC(town, { gender: 'woman', altTitle: 'Mistress', weight: 'plump', age: 'relatively young', demeanour: 'flirtatious', profession: 'pimp' })
      break
      case 'a rugged and grizzled rogue':
        brothel.pimp = setup.createNPC(town, { gender: 'man', altTitle: 'Master', demeanour: 'mean', profession: 'pimp' })

  }

  brothel.pimp.greeting = ['nods at you', 'welcomes you warmly', 'smiles, greets you', 'raises a hand with a wave', 'sizes you up, before $pimp.heshe nods at you', 'checks you out for just a moment before smiling at you', 'waves slightly in your direction',
'gives you you a slight nod', 'ignores you at first before finally turning your way', 'frowns, but greets you just the same']
  console.log(brothel)
  // setup.townBinder(town, brothel, 'brothel')
  return brothel
}
