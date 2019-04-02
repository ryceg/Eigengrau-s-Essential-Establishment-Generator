/* global setup */
setup.createTemple = function (town, opts) {
  console.log('Creating a temple...')
  opts = opts || {}
  let temple = (opts['newBuilding'] || setup.createBuilding)(town, 'temple')
  var data = setup.temple

  Object.assign(temple, {
    passageName: 'TempleOutput',
    initPassage: 'TempleOutput',
    BuildingType: 'temple',
    wordNoun: data.name.wordNoun.random(),
    priest: setup.createNPC(town, {
      dndClass: ['cleric', 'cleric', 'cleric', 'cleric', 'druid'].random(),
      background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'sage', 'sage', 'sage'].random(),
      profession: 'priest'
    }),
    prayerSubject: ['god', 'godess'].random() + ' of ' + data.prayerSubject.random(),
    dedicated: [setup.misc.religion.namedGod.random(), setup.misc.religion.abstractGod.random(), setup.misc.religion.saint.random()].random(),
    knownFor: data.knownFor.random(),
    guardedBy: data.guardedBy.random(),
    floorPlan: data.floorPlan.random(),
    complex: data.complex.random(),
    walls: data.walls.random(),
    interior: data.interior.random(),
    ceiling: data.ceiling.random(),
    rooms: data.rooms.random(),
    features: data.features.random()
  })

  temple.name = [
    'The ' + data.name.adjective.random().toUpperFirst() + ' ' + data.name.plural.random().toUpperFirst(),
    'The ' + temple.wordNoun.toUpperFirst() + ' of ' + data.name.soleNoun.random().toUpperFirst(),
    'The ' + temple.wordNoun.toUpperFirst() + ' of ' + data.name.adjective.random().toUpperFirst() + ' ' + data.name.plural.random().toUpperFirst(),
    setup.createName() + "'s " + temple.wordNoun.toUpperFirst(),
    setup.createName() + "'s " + data.name.soleNoun.random().toUpperFirst()
  ].random()

  temple.wealth = ''
  temple.size = ''
  temple.cleanliness = ''

  var rollDataVariables = ['wealth', 'size', 'cleanliness']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(temple, data.rollData, propName)
  })

  temple.tippyDescription = 'A ' + temple.size + ' and ' + temple.cleanliness + ' ' + temple.wordNoun + ' that is dedicated to ' + temple.dedicated
  return temple
}
