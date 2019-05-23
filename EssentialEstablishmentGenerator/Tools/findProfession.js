setup.findProfession = function (town, npc, profession) {
  profession = profession || npc.dndClass || npc.profession
  console.log('running setup.findProfession; looking for a ' + profession)
  if (Object.keys(setup.townData.professions).includes(profession)) {
    console.log(profession + ' is defined!')
    return setup.townData.professions[profession]
  } else {
    console.log('could not find it. Looking for synonyms...')
    let find = setup.findInContainer(setup.townData.professions, 'synonyms', profession)
    if (typeof find !== 'undefined') {
      return find
    } else {
      console.error(profession + ' not found!')
    }
  }
}
