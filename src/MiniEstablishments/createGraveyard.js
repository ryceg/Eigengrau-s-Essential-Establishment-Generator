setup.createGraveyard = function (town, base = {}) {
  const graveyard = (base.newBuilding || setup.createBuilding)(town, 'graveyard')

  Object.assign(graveyard, {
    associatedTown: town.name,
    initPassage: 'GraveyardOutput',
    passageName: 'GraveyardOutput',
    buildingType: 'graveyard',
    wordNoun: ['graveyard', 'cemetery', 'necropolis', 'burial ground', 'boneyard', 'potter\'s field', 'churchyard'].seededrandom(),
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
    }),
    gravedigger: setup.createNPC(town, {
      profession: 'gravedigger'
    }),
    gravediggerLook: `A gravedigger is ${setup.graveyard.gravediggerLook.seededrandom()}`,
    gravediggerChat: setup.graveyard.gravediggerChat.seededrandom()
  })
  graveyard.name = [
    `${town.name} ${graveyard.wordNoun.toUpperFirst()}`,
    `${graveyard.nameSuffix} ${graveyard.namePrefix} ${graveyard.wordNoun.toUpperFirst()}`,
    `St. ${setup.createName({ race: graveyard.priest.race })}'s ${graveyard.wordNoun.toUpperFirst()}`
  ].seededrandom()
  // You enter the graveyard ___
  graveyard.entrance = [
    `${['by walking through', 'through'].seededrandom()} ${setup.articles.output(setup.graveyard.qualityDescript.seededrandom())}, ${setup.graveyard.secondaryDescriptMetal.seededrandom()}, ${setup.graveyard.metalType.seededrandom()} ${['archway', 'gate', 'arch'].seededrandom()}${setup.graveyard.additionalDetail.seededrandom()}`,
    `${['by walking through', 'through'].seededrandom()} ${setup.articles.output(setup.graveyard.qualityDescript.seededrandom())}, ${setup.graveyard.secondaryDescriptWood.seededrandom()}, ${setup.graveyard.woodStoneType.seededrandom()} ${['archway', 'gate', 'arch'].seededrandom()}${setup.graveyard.additionalDetail.seededrandom()}`,
    `under a small arch made up of the curved branches of several ${setup.flora.tree.typeS.seededrandom()} trees`,
    `through a large archway carved out of an enormous ${setup.flora.tree.typeS.seededrandom()} tree`,
    `by passing between a pair of ${setup.graveyard.qualityDescript.seededrandom()}, ${setup.graveyard.secondaryDescriptMetal.seededrandom()}, ${setup.graveyard.metalType.seededrandom()} ${setup.graveyard.figureType.seededrandom()} statues`,
    `by passing between a pair of ${setup.graveyard.qualityDescript.seededrandom()}, ${setup.graveyard.secondaryDescriptMetal.seededrandom()}, ${setup.graveyard.metalType.seededrandom()} ${['obelisks', 'pillars', 'plinths', 'columns', 'monoliths', 'memorials'].seededrandom()}`,
    `by passing between a pair of ${setup.graveyard.qualityDescript.seededrandom()}, ${setup.graveyard.secondaryDescriptWood.seededrandom()}, ${setup.graveyard.woodStoneType.seededrandom()} ${setup.graveyard.figureType.seededrandom()} statues`,
    `by passing between a pair of ${setup.graveyard.qualityDescript.seededrandom()}, ${setup.graveyard.secondaryDescriptWood.seededrandom()}, ${setup.graveyard.woodStoneType.seededrandom()} ${['obelisks', 'pillars', 'plinths', 'columns', 'monoliths', 'memorials'].seededrandom()}`,
    `past a group of ${['overgrown', 'nicely trimmed', 'well planted planted', 'interestingly arranged', 'dying', 'thriving', 'wild'].seededrandom()} ${setup.flora.flower.bush.seededrandom()} bushes`,
    `by passing by several patches of ${['overgrown', 'well planted planted', 'interestingly arranged', 'dying', 'thriving', 'wild'].seededrandom()} ${setup.flora.flower.stemP.seededrandom()}`
  ].seededrandom()
  graveyard.feature = [
    `a large ${['stone', 'bronze', 'copper', 'gold', 'obsidian', 'slate', 'marble'].seededrandom()} memorial to St. ${setup.createName({ race: graveyard.priest.race })}`,
    `${['off to one side', 'in the center', 'at the far end', 'right near the front'].seededrandom()} of the ${graveyard.wordNoun} is a ${['quite small', 'very large', 'large', 'decently sized', 'tiny', 'well kempt', 'rather rundown', 'dirty looking'].seededrandom()} shrine to a popular god`,
    setup.graveyard.feature.seededrandom(),
    setup.graveyard.feature.seededrandom(),
    setup.graveyard.feature.seededrandom()
  ].seededrandom()
  graveyard.tippyDescription = `${setup.articles.output(graveyard.wordNoun).toUpperFirst()} that is ${graveyard.size} and is ${graveyard.location}.`
  return graveyard
}
