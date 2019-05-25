
setup.createSocialClass = function (town, npc) {
  console.log('Creating social class...')
  setup.socialClasses = [
    [195, 'aristocracy', 5],
    [95, 'aristocracy', 5],
    [80, 'nobility', 4],
    // [75, 'high class'],
    // [65, 'upper-middle class'],
    [60, 'commoner', 3],
    // [40, 'lower-middle class'],
    [20, 'peasantry', 2],
    [10, 'paupery', 1],
    [0, 'indentured servitude', 0]
  ]
  if (!npc.roll) {
    npc.roll = {}
  }
  const profession = setup.findProfession(town, npc)

  npc.roll.socialClass = npc.roll.socialClass || profession.socialClassRoll || 40 + dice(8, 6)

  console.log({ npc })
  if (!npc.socialClass) {
    console.log('Social class not predefined. Searching for the social class of a ' + npc.profession + '...')
    // if .socialClass is defined in the professions.js, then that's all dandy.
    if (profession.socialClass) {
      npc.socialClass = profession.socialClass
      return npc
    // otherwise, just roll some dice.
    } else {
      console.log('No synonyms found for ' + npc.dndClass)
      const array = setup.socialClasses.find(function (desc) {
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
