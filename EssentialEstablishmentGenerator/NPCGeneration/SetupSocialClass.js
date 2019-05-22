
setup.createSocialClass = function (town, npc) {
  console.log('Creating wealth class...')
  setup.socialClasses = [
    [95, 'aristocracy'],
    [80, 'nobility'],
    // [75, 'high class'],
    // [65, 'upper-middle class'],
    [60, 'commoner'],
    // [40, 'lower-middle class'],
    [20, 'peasantry'],
    [10, 'paupery'],
    [0, 'indentured servitude']
  ]
  if (!npc.socialClass) {
    console.log('Wealth class not predefined. Rolling for a ' + npc.profession + '...')
    if (setup.townData.professions[(npc.dndClass || npc.profession)]) {
      var test = setup.townData.professions[(npc.dndClass || npc.profession)].socialClassRoll(town, npc)
    } else {
      console.log('Unidentified profession- ' + npc.profession + ' does not exist in townData.professions!')
      test = 20 + dice(4, 10)
    }
    npc.roll.socialClass = test
    console.log(npc.roll.socialClass)
    var array = setup.socialClasses.find(function (desc) {
      return desc[0] <= npc.roll.socialClass
    })
    npc.socialClass = array[1]
  }
  if (npc.socialClass === undefined) {
    console.log('Failed to set a wealth class that matched the roll of ' + npc.roll.socialClass + ' for ' + npc.name + '.')
    npc.socialClass = setup.socialClasses[random(0, setup.socialClasses.length - 1)]
  }
  return npc
}
