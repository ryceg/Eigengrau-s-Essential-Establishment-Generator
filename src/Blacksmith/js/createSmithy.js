
// uses setup.createNPC, setup.createSmithyName
setup.createSmithy = function (town, opts = {}) {
  const smithy = (opts.newBuilding || lib.createBuilding)(town, 'smithy', opts)
  console.groupCollapsed('Smithy loading...')
  smithy.associatedNPC = setup.createBlacksmith(town, smithy, opts)
  lib.createReciprocalRelationship(town, smithy, smithy.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
  setup.createSmithyName(town, smithy)
  Object.assign(smithy, {
    wordNoun: ['smithy', 'blacksmith', 'smithery', 'farrier shop'].random(),
    passageName: 'SmithyOutput',
    initPassage: 'InitSmithy',
    buildingType: 'smithy',
    objectType: 'building',
    weapons: ['dagger', 'long sword', 'short sword', 'morning star', 'mace', 'axe', 'greataxe', 'spear', 'falcheon', 'bastard sword', 'warhammer', 'iron crossbow', 'claymore', 'flail', 'broad sword', 'pike', 'scimitar', 'dart', 'rapier', 'trident', 'halberd', 'glaive', 'lance', 'war pick'],
    mundane: ['plows', 'rabbit traps', 'horseshoes', 'shovels', 'lamps', 'fire pokers', 'axes', 'hammers', 'pliers', 'steel couplings', 'trays', 'wheelbarrows', 'nails', 'pickaxes', 'hatchets', 'locks and keys', 'lockpicks']
  })

  lib.createStructure(town, smithy)
  smithy.structure.smithyDescriptor = `${smithy.structure.material.wealth} ${smithy.structure.material.noun} ${smithy.wordNoun} with ${lib.articles.output(smithy.structure.roof.verb)} roof`

  const rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise', 'activity']
  for (const propName of rollDataVariables) {
    lib.defineRollDataGetter(smithy, setup.smithy.rollData[propName].rolls, propName)
  }

  smithy.notableFeature = `its ${smithy.expertise} weapons and armour`
  smithy.tippyDescription = `${lib.articles.output(smithy.size || smithy._size).toUpperFirst()} ${smithy.wordNoun} that's ${smithy.cleanliness || smithy._cleanliness}, and is known for ${smithy.notableFeature}.`
  console.log(smithy)
  console.groupEnd()

  return smithy
}
