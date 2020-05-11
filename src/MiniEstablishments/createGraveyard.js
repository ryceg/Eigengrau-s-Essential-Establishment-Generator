setup.createGraveyard = function (town, base) {
  base = base || {}
  const graveyard = (base['newBuilding'] || setup.createBuilding)(town, 'graveyard')

  Object.assign(graveyard, {
    associatedTown: town.name,
    initPassage: 'GraveyardOutput',
    passageName: 'GraveyardOutput',
    buildingType: 'graveyard',
    wordNoun: ['graveyard', 'cemetery', 'necropolis', 'burial ground', 'boneyard', `potter's field`, 'churchyard'].seededrandom(),
    needsWordNoun: false,
    size: setup.graveyard.size.seededrandom(),
    location: setup.graveyard.location.seededrandom(),
    cleanliness: setup.graveyard.cleanliness.seededrandom(),
    namePrefix: setup.graveyard.namePrefix.seededrandom(),
    nameSuffix: setup.graveyard.nameSuffix.seededrandom(),
    priest: setup.createNPC(town, {
      dndClass: ['cleric', 'cleric', 'cleric', 'cleric', 'druid'].seededrandom(),
      background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'sage', 'sage', 'sage'].seededrandom(),
      profession: 'priest'
    })
  })
  graveyard.name = [
    `${town.name} ${graveyard.wordNoun.toUpperFirst()}`,
    `${graveyard.nameSuffix} ${graveyard.namePrefix} ${graveyard.wordNoun.toUpperFirst()}`,
    `St. ` + setup.createName({ race: graveyard.priest.race }) + `'s ${graveyard.wordNoun.toUpperFirst()}`
  ].seededrandom()
  graveyard.feature = [
    'a large ' + ['stone', 'bronze', 'copper', 'gold', 'obsidian', 'slate', 'marble'].seededrandom() + ' memorial to St. ' + setup.createName({ race: graveyard.priest.race }),
    ['off to one side', 'in the center', 'at the far end', 'right near the front'].seededrandom() + ` of the ${graveyard.wordNoun} is a ` + ['quite small', 'very large', 'large', 'decently sized', 'tiny', 'well kempt', 'rather rundown', 'dirty looking'].seededrandom() + ' shrine to a popular god',
    setup.graveyard.feature.seededrandom(),
    setup.graveyard.feature.seededrandom(),
    setup.graveyard.feature.seededrandom()
  ].seededrandom()
  graveyard.tippyDescription = `A ${graveyard.wordNoun} that is ${graveyard.size} and is ${graveyard.location}.`
  return graveyard
}
