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
  // as title is already a value in npcData.js the title for the brothel owner appears as altTitle
  brothel.pimp = setup.createNPC(town, Object.assign(setup.objectArrayFetcher(setup.brothel.pimp), {
    isShallow: true,
    hasClass: false
  }))

  brothel.pimp.greeting = [
    'nods at you', 'welcomes you warmly', 'smiles, greets you', 'raises a hand with a wave', 'sizes you up, before $pimp.heshe nods at you', 'checks you out for just a moment before smiling at you', 'waves slightly in your direction', 'gives you you a slight nod', 'ignores you at first before finally turning your way', 'frowns, but greets you just the same'
  ]
  console.log(brothel)
  // setup.townBinder(town, brothel, 'brothel')
  return brothel
}
