/* global setup random dice */
setup.createWealthClass = function (town, npc) {
  console.log('Creating wealth class...')
  setup.wealthClasses = [
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
  if (!npc.wealthClass) {
    console.log('Wealth class not predefined. Rolling for a ' + npc.profession + '...')
    if (setup.townData.professions[(npc.dndClass || npc.profession)]) {
      var test = setup.townData.professions[(npc.dndClass || npc.profession)].wealthClassRoll(town, npc)
    } else {
      console.log('Unidentified profession- ' + npc.profession + ' does not exist in townData.professions!')
      test = 20 + dice(4, 10)
    }
    npc.roll.wealthClass = test
    console.log(npc.roll.wealthClass)
    var array = setup.wealthClasses.find(function (desc) {
      return desc[0] <= npc.roll.wealthClass
    })
    npc.wealthClass = array[1]
  }
  if (npc.wealthClass === undefined) {
    console.log('Failed to set a wealth class that matched the roll of ' + npc.roll.wealthClass + ' for ' + npc.name + '.')
    npc.wealthClass = setup.wealthClasses[random(0, setup.wealthClasses.length - 1)]
  }
  return npc
}
