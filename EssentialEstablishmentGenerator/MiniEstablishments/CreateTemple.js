
setup.createTemple = function (town, opts) {
  console.log('Creating a temple...')
  opts = opts || {}
  const temple = (opts['newBuilding'] || setup.createBuilding)(town, 'temple')
  const data = setup.temple
  Object.assign(temple, {
    passageName: 'TempleOutput',
    initPassage: 'TempleOutput',
    buildingType: 'temple',
    wordNoun: data.name.wordNoun.seededrandom(),
    priest: setup.createNPC(town, {
      dndClass: ['cleric', 'cleric', 'cleric', 'cleric', 'druid'].seededrandom(),
      background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'sage', 'sage', 'sage'].seededrandom(),
      profession: 'priest'
    }),
    prayerSubject: data.prayerSubject.seededrandom(),
    dedicated: [setup.misc.religion.namedGod.seededrandom(), setup.misc.religion.abstractGod.seededrandom(), setup.misc.religion.saint.seededrandom(), data.dedicated.seededrandom()].seededrandom(),
    knownFor: data.knownFor.seededrandom(),
    guardedBy: data.guardedBy.seededrandom(),
    floorPlan: data.floorPlan.seededrandom(),
    complex: data.complex.seededrandom(),
    walls: data.walls.seededrandom(),
    ceiling: data.ceiling.seededrandom(),
    rooms: data.rooms.seededrandom(),
    features: data.features.seededrandom(),
    architect: data.architect.seededrandom(),
    priestChat: '<<print $priest.heshe.toUpperFirst()>> ' + data.priestChat.seededrandom(),
    priestLook: 'A temple priest is ' + data.priestLook.seededrandom(),
    blessingConvey: data.blessingConvey.seededrandom(),
    blessingGift: data.blessingGift.seededrandom()
  })
  setup.structure.create(town, temple)
  temple.structure.templeDescriptor = 'a ' + temple.structure.material.wealth + ' ' + temple.structure.material.noun + ' ' + temple.wordNoun + ' with a ' + temple.structure.roof.verb + ' roof'
  temple.name = [
    'The ' + data.name.adjective.seededrandom().toUpperFirst() + ' ' + temple.wordNoun.toUpperFirst() + ' of ' + data.name.plural.seededrandom().toUpperFirst(),
    'The ' + temple.wordNoun.toUpperFirst() + ' of ' + data.name.soleNoun.seededrandom().toUpperFirst(),
    'The ' + temple.wordNoun.toUpperFirst() + ' of ' + data.name.adjective.seededrandom().toUpperFirst() + ' ' + data.name.plural.seededrandom().toUpperFirst(),
    'The ' + data.name.colour.seededrandom().toUpperFirst() + ' ' + temple.wordNoun.toUpperFirst() + ['', ' of ' + data.name.plural.seededrandom().toUpperFirst(), ' of ' + data.name.soleNoun.seededrandom().toUpperFirst()].seededrandom(),
    ['', 'St. '].seededrandom() + setup.createName({ race: temple.priest.race }) + "'s " + temple.wordNoun.toUpperFirst(),
    ['', 'St. '].seededrandom() + setup.createName({ race: temple.priest.race }) + "'s " + data.name.soleNoun.seededrandom().toUpperFirst()
  ].seededrandom()

  temple.wealth = ''
  temple.size = ''
  temple.cleanliness = ''
  temple.blessing = temple.blessingConvey + '. ' + temple.blessingGift + '.'
  const rollDataVariables = ['wealth', 'size', 'cleanliness']
  for (const propName of rollDataVariables) {
    setup.defineRollDataGetter(temple, data.rollData, propName)
  }

  // These are the full sentence printouts referenced within TempleOutput.twee
  temple.guardReadout = 'This ' + temple.wordNoun + ' is protected by ' + temple.guardedBy + '.'
  temple.aboutReadout = 'Within this holy place they pray to ' + temple.prayerSubject + '. The temple itself was originally dedicated to ' + temple.dedicated + ' and is known for ' + temple.knownFor + '.'
  temple.interiorReadout = 'You enter the ' + temple.size + ', ' + temple.cleanliness + ' ' + temple.wordNoun + ' and notice ' + temple.features + '. The main room is ' + temple.floorPlan + ' in shape and is decorated with ' + temple.wealth + ' looking ' + ['furniture', 'pews', 'relics', 'holy statues', 'holy symbols', 'stained glass windows', 'holy art'].seededrandom() + '. The interior walls of the ' + temple.wordNoun + ' are ' + temple.walls + ' and the the ceiling is ' + temple.ceiling + '. The ' + temple.wordNoun + ' was designed by ' + temple.architect + ' and it is ' + temple.complex + '.'
  temple.tippyDescription = 'A ' + temple.size + ' and ' + temple.cleanliness + ' ' + temple.wordNoun + ' that is dedicated to ' + temple.dedicated
  return temple
}
