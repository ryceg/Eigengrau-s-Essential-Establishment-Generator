setup.createSmithyName = function (town, smithy) {
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
      smithy.name = smithy.blacksmith.firstName + ' and ' + family
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
  return smithy
}
