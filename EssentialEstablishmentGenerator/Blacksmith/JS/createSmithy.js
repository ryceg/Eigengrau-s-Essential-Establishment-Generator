setup.createSmithy = function () {
  var smithy = setup.createBuilding()
  console.groupCollapsed('Smithy loading...')
  smithy.blacksmith = setup.createBlacksmith()
  var blacksmith = smithy.blacksmith
  smithy.passageName = 'SmithyOutput'
  smithy.weapons = ['dagger', 'long sword', 'short sword', 'morning star', 'mace', 'axe', 'greataxe', 'spear', 'falcheon', 'bastard sword', 'warhammer', 'iron crossbow', 'claymore', 'flail', 'broad sword', 'pike', 'scimitar', 'dart', 'rapier', 'trident', 'halberd', 'glaive', 'lance', 'war pick']
  smithy.mundane = ['plows', 'rabbit traps', 'horseshoes', 'shovels', 'lamps', 'fire pokers', 'axes', 'hammers', 'pliers', 'steel couplings', 'trays', 'wheelbarrows', 'nails', 'pickaxes', 'hatchets', 'locks and keys', 'lockpicks']

  var smithyNameRoll = random(1, 5)
  var adjective = ['Hard', 'Sharp', 'Pointy', 'Well-worn', 'Rusted', 'Shiny', 'Cold', 'Glowing', 'Heated', 'Golden', 'Silvered', 'Bronzed', 'Polished', 'Engraved', 'Jeweled', 'Plated', 'Eternal', 'Long-Lasting', 'Famed'].random()
  var noun = ['Iron', 'Metal', 'Gold', 'Silver', 'Bronze', 'Copper', 'Platinum', 'Electrum', 'Ingot', 'Tongs', 'Pliers', 'Anvil', 'Hammer', 'Forge', 'Bellows', 'Bucket', 'Steam', 'Smoke', 'Chimney', 'Flame', 'Fire', 'Magma', 'Coal', 'Crucible'].random()
  var family = ['Son', 'Daughter', 'Brother', 'Sister', 'Uncle', 'Aunt', 'Father', 'Friends', 'Family', 'Fool'].random()
  var rider = ['Shop', 'Blacksmith', 'Fabricator', 'Smith', 'Smithy', 'Farrier', 'Metalsmith', 'Swordsmith'].random()

  switch (smithyNameRoll) {
    case 1:
      smithy.name = 'The ' + adjective + ' ' + noun
      break
    case 2:
      smithy.name = blacksmith.firstName + ' and ' + family
      break
    case 3:
      smithy.name = 'The ' + noun + ' and ' + family
      break
    case 4:
      smithy.name = 'The ' + adjective + ' ' + rider
      break
    case 5:
      smithy.name = adjective + ' ' + noun
      break
    default:
      smithy.name = 'The ' + adjective + ' Smithy'
  }
  console.groupEnd()
  return smithy
}
