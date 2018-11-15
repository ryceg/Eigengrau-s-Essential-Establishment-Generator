/* global setup */
setup.createBrothel = function (town, tavern) {
  console.log('Creating a brothel...')
  var brothel
  if (tavern.hasBrothel === true) {
    brothel = tavern
  } else {
    brothel = setup.createBuilding(town, 'brothel')
  }
  Object.assign(brothel, {
    name: setup.brothelData.name.random(),
    passageName: 'BrothelOutput',
    initPassage: 'BrothelOutput',
    BuildingType: 'brothel',
    wordNoun: ['brothel', 'whorehouse', "gentleman's club"].random(),
    brothelSpecialty: setup.brothelData.specialty.random(),
    brothelTalk: setup.brothelData.talk.random(),
    brothelRumour: setup.brothelData.rumour.random(),
    brothelNotice: setup.brothelData.notice.random(),
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
  switch (brothel.owner) {
    case 'a mean old madam':
      brothel.pimp = setup.createNPC({ age: 'venerable', gender: 'woman', title: 'Mistress', demeanour: 'mean', profession: 'pimp' })
      break
    case 'a large madam with a no-nonsense attitude':
      brothel.pimp = setup.createNPC({ gender: 'woman', title: 'Mistress', weight: 'plump', demeanour: 'sensible', profession: 'pimp' })
      break
    case 'a warm motherly figure':
      brothel.pimp = setup.createNPC({ gender: 'woman', title: 'Mistress', weight: 'plump', demeanour: 'kind', profession: 'pimp' })
      break
    case 'a surly brute':
      brothel.pimp = setup.createNPC({ gender: 'man', title: 'Master', weight: 'muscular', demeanour: 'mean', profession: 'pimp' })
      break
    case 'a tyrannical and cruel fellow':
      brothel.pimp = setup.createNPC({ gender: 'man', title: 'Master', age: 'middle-aged', demeanour: 'mean', profession: 'pimp' })
      break
    case 'a sultry seductress':
      brothel.pimp = setup.createNPC({ gender: 'woman', title: 'Mistress', age: 'relatively young', demeanour: 'flirtatious', profession: 'pimp' })
      break
    case 'a charming witch':
      brothel.pimp = setup.createNPC({ gender: 'woman', title: 'Mistress', age: 'relatively young', dndClass: 'sorcerer', profession: 'pimp' })
  }
  console.log(brothel)
  setup.townBinder(town, brothel, 'brothel')
  return brothel
}
