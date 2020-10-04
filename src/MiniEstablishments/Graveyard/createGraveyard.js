setup.createGraveyard = (town, base = {}) => {
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
    tree: lib.tree.create({ biome: 'plains' }),
    associatedNPC: setup.createNPC(town, {
      profession: 'gravedigger'
    }),
    gravediggerLook: `A gravedigger is ${setup.graveyard.gravediggerLook.random()}`,
    gravediggerChat: setup.graveyard.gravediggerChat.random()
  })
  graveyard.name = [
    `${town.name} ${graveyard.wordNoun.toUpperFirst()}`,
    `${graveyard.nameSuffix} ${graveyard.namePrefix} ${graveyard.wordNoun.toUpperFirst()}`,
    `St. ${lib.createName({ race: graveyard.associatedNPC.race })}'s ${graveyard.wordNoun.toUpperFirst()}`
  ].random()
  graveyard.feature = [
    `a large ${['stone', 'bronze', 'copper', 'gold', 'obsidian', 'slate', 'marble'].random()} memorial to St. ${lib.createName({ race: graveyard.associatedNPC.race })}`,
    `${['off to one side', 'in the center', 'at the far end', 'right near the front'].random()} of the ${graveyard.wordNoun} is ${lib.articles.output(['quite small', 'very large', 'large', 'decently sized', 'tiny', 'well kempt', 'rather rundown', 'dirty looking'].random())} shrine to a popular god`,
    setup.graveyard.feature.random(),
    setup.graveyard.feature.random(),
    setup.graveyard.feature.random()
  ].random()
  const pairOfType = Object.keys(setup.graveyard.material).random()
  graveyard.pairOf = [
    `${setup.graveyard.qualityDescriptors.random()}, ${setup.graveyard.material[pairOfType].secondaryDescriptors.random()}, ${setup.graveyard.material[pairOfType].type.random()} ${setup.graveyard.figureType.random()} statues`,
    `${setup.graveyard.qualityDescriptors.random()}, ${setup.graveyard.material[pairOfType].secondaryDescriptors.random()}, ${setup.graveyard.material[pairOfType].type.random()} ${['obelisks', 'pillars', 'plinths', 'columns', 'monoliths', 'memorials'].random()}`
  ].random()
  // You enter the graveyard ___
  graveyard.entrance = [
    `${['by walking through', 'through'].random()} ${lib.articles.output(setup.graveyard.qualityDescriptors.random())}, ${setup.graveyard.material.metal.secondaryDescriptors.random()}, ${setup.graveyard.material.metal.type.random()} ${['archway', 'gate', 'arch'].random()}${setup.graveyard.additionalDetail.random()}`,
    `${['by walking through', 'through'].random()} ${lib.articles.output(setup.graveyard.qualityDescriptors.random())}, ${setup.graveyard.material.wood.secondaryDescriptors.random()}, ${setup.graveyard.material.wood.type.random()} ${['archway', 'gate', 'arch'].random()}${setup.graveyard.additionalDetail.random()}`,
    `under a small arch made up of the curved branches of several ${lib.flora.tree.typeS.random()} trees`,
    `through a large archway carved out of an enormous ${lib.flora.tree.typeS.random()} tree`,
    `by passing between a pair of ${graveyard.pairOf}`,
    `past a group of ${['overgrown', 'nicely trimmed', 'well planted', 'interestingly arranged', 'dying', 'thriving', 'wild'].random()} ${lib.flora.flower.bush.random()} bushes`,
    `by passing by several patches of ${['overgrown', 'well planted', 'interestingly arranged', 'dying', 'thriving', 'wild'].random()} ${lib.flora.flower.stemP.random()}`
  ].random()
  setup.createBuildingRelationship(town, graveyard, graveyard.associatedNPC, { relationship: 'caretaker', reciprocalRelationship: 'place of employment' })

  graveyard.tippyDescription = `${lib.articles.output(graveyard.wordNoun).toUpperFirst()} that is ${graveyard.size} and is ${graveyard.location}.`
  return graveyard
}
