
setup.createSocialClass = function (town, npc) {
  console.log('Creating social class...')
  setup.socialClasses = [
    [195, 'aristocracy'],
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
  if (!npc.roll.socialClass) {
    npc.roll.socialClass = setup.townData.professions[(npc.dndClass || npc.profession)].socialClassRoll(town, npc) || 20 + dice(4, 10)
  }
  if (!npc.socialClass) {
    console.log('Social class not predefined. Searching for the social class of a ' + npc.profession + '...')
    // if .socialClass is defined in the professions.js, then that's all dandy.
    if (setup.townData.professions[(npc.dndClass || npc.profession)].socialClass) {
      npc.socialClass = setup.townData.professions[(npc.dndClass || npc.profession)].socialClass
      return npc
    // ...but if not, try looking for synonyms.
    } else if (typeof setup.findInContainer(setup.townData.professions, 'synonyms', npc.dndClass) !== 'undefined') {
      console.log('Synonym for ' + npc.dndClass + ' found!')
      npc.socialClass = setup.findInContainer(setup.townData.professions, 'synonyms', npc.dndClass)
      return npc
    // otherwise, just roll some dice.
    } else {
      var array = setup.socialClasses.find(function (desc) {
        return desc[0] <= npc.roll.socialClass
      })
      npc.socialClass = array[1]
      console.log('Unidentified profession- ' + npc.profession + ' does not exist in townData.professions!')
    }
  }
  if (npc.socialClass === undefined) {
    console.log('Failed to set a social class that matched the roll of ' + npc.roll.socialClass + ' for ' + npc.name + '.')
    npc.socialClass = setup.socialClasses[random(0, setup.socialClasses.length - 1)]
  }
  return npc
}
