setup.findProfession = function (town, npc, profession) {
  profession = profession || npc.dndClass || npc.profession
  if (!profession && npc.socialClass) { profession = setup.fetchProfessionChance(town, npc) }
  console.groupCollapsed('running setup.findProfession; looking for a ' + profession)
  console.log({
    town,
    npc,
    profession
  })
  if (Object.keys(setup.townData.professions).includes(profession)) {
    console.log(profession + ' is defined!')
    console.groupEnd()
    return setup.townData.professions[profession]
  } else {
    console.log('could not find it. Looking for synonyms...')
    const find = setup.findInContainer(setup.townData.professions, 'synonyms', profession)
    if (typeof find !== 'undefined') {
      console.log('Found a synonym!')
      console.log({ find })
      console.groupEnd()
      return find
    } else {
      console.error(profession + ' not found!')
      console.groupEnd()
      return setup.townData.professions['peasant']
    }
  }
}
