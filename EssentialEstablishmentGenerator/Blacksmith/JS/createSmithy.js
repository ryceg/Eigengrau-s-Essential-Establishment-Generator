
setup.createSmithy = function (town, opts) {
  opts = opts || {}
  let smithy = (opts['newBuilding'] || setup.createBuilding)(town, 'smithy')
  console.groupCollapsed('Smithy loading...')
  smithy.blacksmith = setup.createBlacksmith(town, smithy)
  setup.createSmithyName(town, smithy)
  Object.assign(smithy, {
    wordNoun: ['smithy', 'blacksmith', 'smithery', 'farrier shop'].seededrandom(),
    passageName: 'SmithyOutput',
    initPassage: 'InitSmithy',
    BuildingType: 'smithy',
    associatedTown: town.name,
    weapons: ['dagger', 'long sword', 'short sword', 'morning star', 'mace', 'axe', 'greataxe', 'spear', 'falcheon', 'bastard sword', 'warhammer', 'iron crossbow', 'claymore', 'flail', 'broad sword', 'pike', 'scimitar', 'dart', 'rapier', 'trident', 'halberd', 'glaive', 'lance', 'war pick'],
    mundane: ['plows', 'rabbit traps', 'horseshoes', 'shovels', 'lamps', 'fire pokers', 'axes', 'hammers', 'pliers', 'steel couplings', 'trays', 'wheelbarrows', 'nails', 'pickaxes', 'hatchets', 'locks and keys', 'lockpicks']
    // id: Math.floor(randomFloat(1) * 0x10000)
  })
  smithy.wealth = ''
  smithy.size = ''
  smithy.cleanliness = ''
  smithy.expertise = ''
  smithy.activity = ''

  var rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise', 'activity']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(smithy, setup.smithy.rollData, propName)
  })

  smithy.notableFeature = 'its ' + smithy.expertise + ' weapons and armour'
  smithy.tippyDescription = 'A ' + (smithy.size || smithy._size) + ' ' + smithy.wordNoun + " that's " + (smithy.cleanliness || smithy._cleanliness) + ', and is known for ' + smithy.notableFeature + '.'
  console.log(smithy)
  console.groupEnd()

  // setup.townBinder(town, smithy, 'smithy')
  return smithy
}
