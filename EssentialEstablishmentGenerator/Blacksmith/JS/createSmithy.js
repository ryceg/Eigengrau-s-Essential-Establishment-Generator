/* global setup */
setup.createSmithy = function (town, opts) {
  opts = opts || {}
  let smithy = (opts['newBuilding'] || setup.createBuilding)(town, 'smithy')
  console.groupCollapsed('Smithy loading...')
  smithy.blacksmith = setup.createBlacksmith(smithy)
  setup.createSmithyName(smithy, town)
  Object.assign(smithy, {
    wordNoun: ['smithy', 'blacksmith', 'smithery', 'farrier shop'].random(),
    passageName: 'SmithyOutput',
    initPassage: 'InitSmithy',
    BuildingType: 'smithy',
    associatedTown: town.name,
    weapons: ['dagger', 'long sword', 'short sword', 'morning star', 'mace', 'axe', 'greataxe', 'spear', 'falcheon', 'bastard sword', 'warhammer', 'iron crossbow', 'claymore', 'flail', 'broad sword', 'pike', 'scimitar', 'dart', 'rapier', 'trident', 'halberd', 'glaive', 'lance', 'war pick'],
    mundane: ['plows', 'rabbit traps', 'horseshoes', 'shovels', 'lamps', 'fire pokers', 'axes', 'hammers', 'pliers', 'steel couplings', 'trays', 'wheelbarrows', 'nails', 'pickaxes', 'hatchets', 'locks and keys', 'lockpicks'],
    id: Math.floor(Math.random() * 0x10000)
  })

  var rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(smithy, setup.smithyData.rollData, propName)
  })
  smithy.wealth = ''
  smithy.size = ''
  smithy.cleanliness = ''
  smithy.expertise = ''
  smithy.notableFeature = 'its ' + smithy.expertise + ' weapons and armour'
  console.log(smithy)
  console.groupEnd()

  // setup.townBinder(town, smithy, 'smithy')
  return smithy
}
