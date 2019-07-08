setup.createGraveyard = function (town, base) {
  base = base || {}
  const graveyard = (base['newBuilding'] || setup.createBuilding)(town, 'graveyard')

  Object.assign(graveyard, {
    associatedTown: town.name,
    initPassage: 'GraveyardOutput',
    passageName: 'GraveyardOutput',
    buildingType: 'graveyard',
    wordNoun: ['graveyard', 'cemetary', 'necropolis', 'burial ground', 'boneyard', `potter's field`].seededrandom(),
    needsWordNoun: false,
    size: setup.graveyard.size.seededrandom(),
    location: setup.graveyard.location.seededrandom(),
    cleanliness: setup.graveyard.cleanliness.seededrandom()
  })
  graveyard.name = [
    `${town.name} ${graveyard.wordNoun.toUpperFirst()}`
  ].seededrandom()
  graveyard.tippyDescription = `A ${graveyard.wordNoun} that is ${graveyard.size} and is ${graveyard.location}.`
  return graveyard
}
