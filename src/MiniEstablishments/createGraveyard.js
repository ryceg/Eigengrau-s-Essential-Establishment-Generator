setup.createGraveyard = function (town, base = {}) {
  const graveyard = (base.newBuilding || setup.createBuilding)(town, 'graveyard')

  Object.assign(graveyard, {
    associatedTown: town.name,
    initPassage: 'GraveyardOutput',
    passageName: 'GraveyardOutput',
    buildingType: 'graveyard',
    wordNoun: ['graveyard', 'cemetery', 'necropolis', 'burial ground', 'boneyard', 'potter\'s field', 'churchyard'].random(),
    needsWordNoun: false,
    size: setup.graveyard.size.random(),
    location: setup.graveyard.location.random(),
    cleanliness: setup.graveyard.cleanliness.random(),
    namePrefix: setup.graveyard.namePrefix.random(),
    nameSuffix: setup.graveyard.nameSuffix.random(),
    priest: setup.createNPC(town, {
      dndClass: ['cleric', 'cleric', 'cleric', 'cleric', 'druid'].random(),
      background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'sage', 'sage', 'sage'].random(),
      profession: 'priest'
    })
  })
  graveyard.name = [
    `${town.name} ${graveyard.wordNoun.toUpperFirst()}`,
    `${graveyard.nameSuffix} ${graveyard.namePrefix} ${graveyard.wordNoun.toUpperFirst()}`,
    `St. ${setup.createName({ race: graveyard.priest.race })}'s ${graveyard.wordNoun.toUpperFirst()}`
  ].random()
  graveyard.feature = [
    `a large ${['stone', 'bronze', 'copper', 'gold', 'obsidian', 'slate', 'marble'].random()} memorial to St. ${setup.createName({ race: graveyard.priest.race })}`,
    `${['off to one side', 'in the center', 'at the far end', 'right near the front'].random()} of the ${graveyard.wordNoun} is a ${['quite small', 'very large', 'large', 'decently sized', 'tiny', 'well kempt', 'rather rundown', 'dirty looking'].random()} shrine to a popular god`,
    setup.graveyard.feature.random(),
    setup.graveyard.feature.random(),
    setup.graveyard.feature.random()
  ].random()
  graveyard.tippyDescription = `${setup.articles.output(graveyard.wordNoun).toUpperFirst()} that is ${graveyard.size} and is ${graveyard.location}.`
  return graveyard
}
