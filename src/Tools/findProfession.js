setup.findProfession = function (town, npc, profession) {
  profession = profession || npc.profession || npc.dndClass
  if (!profession && npc.socialClass) { profession = setup.fetchProfessionChance(town, npc) }
  console.groupCollapsed(`running setup.findProfession for ${npc.name}; looking for ${setup.articles.output(profession)}`)
  console.log({
    town,
    npc,
    profession
  })

  if (setup.townData.professions[profession]) {
    console.log(`${profession} is defined!`)
    console.groupEnd()
    return setup.townData.professions[profession]
  }

  console.log('could not find it. Looking for synonyms...')
  const found = lib.findInContainer(setup.townData.professions, 'synonyms', profession)

  if (typeof found === 'undefined') {
    console.error(`${profession} not found!`)
    console.groupEnd()
    return setup.townData.professions.peasant
  }

  console.log('Found a synonym!')
  console.log({ find: found })
  console.groupEnd()
  return found
}
