setup.createTemple = (town, opts = {}) => {
  lib.logger.info('Creating a temple...')

  const temple = (opts.newBuilding || lib.createBuilding)(town, 'temple', opts)
  const data = lib.templeData

  const npc = setup.createNPC(town, {
    profession: lib.random(['priest', 'priest', 'priest', 'priest', 'priest', 'cleric', 'cleric', 'cleric', 'cleric', 'druid']),
    background: lib.random(['acolyte', 'acolyte', 'acolyte', 'acolyte', 'sage', 'sage', 'sage']),
    ...opts.npc
  })

  lib.assign(temple, {
    passageName: 'TempleOutput',
    initPassage: 'TempleOutput',
    localImage: 'temple-illustration',
    buildingType: 'temple',
    objectType: 'building',
    wordNoun: data.name.wordNoun.random(),
    associatedNPC: npc,
    prayerSubject: data.prayerSubject.random(),
    dedicated: [setup.misc.religion.namedGod.random(), setup.misc.religion.abstractGod.random(), setup.misc.religion.saint.random(), data.dedicated.random()].random(),
    knownFor: data.knownFor.random(),
    guardedBy: data.guardedBy.random(),
    floorPlan: data.floorPlan.random(),
    complex: data.complex.random(),
    walls: data.walls.random(),
    ceiling: data.ceiling.random(),
    rooms: data.rooms.random(),
    features: data.features.random(),
    architect: data.architect.random(),
    priestChat: `<<print $associatedNPC.heshe.toUpperFirst()>> ${data.priestChat.random()}`,
    priestLook: `A temple priest is ${data.priestLook.random()}`,
    blessingConvey: data.blessingConvey.random(),
    blessingGift: data.blessingGift.random()
  })

  lib.createStructure(town, temple)

  lib.assign(temple.structure, {
    templeDescriptor: `${lib.articles.output(temple.structure.material.wealth)} ${temple.structure.material.noun} ${temple.wordNoun} with a ${temple.structure.roof.verb} roof`
  })

  lib.assign(temple, {
    name: lib.toTitleCase(lib.random([
      `The ${data.name.adjective.random().toUpperFirst()} ${temple.wordNoun.toUpperFirst()} of ${data.name.plural.random().toUpperFirst()}`,
      `The ${temple.wordNoun.toUpperFirst()} of ${data.name.soleNoun.random().toUpperFirst()}`,
      `The ${temple.wordNoun.toUpperFirst()} of ${data.name.adjective.random().toUpperFirst()} ${data.name.plural.random().toUpperFirst()}`,
      `The ${data.name.colour.random().toUpperFirst()} ${temple.wordNoun.toUpperFirst()}${['', ` of ${data.name.plural.random().toUpperFirst()}`, ` of ${data.name.soleNoun.random().toUpperFirst()}`].random()}`,
      `${['', 'St.'].random()} ${lib.createName({ race: temple.associatedNPC.race })}'s ${temple.wordNoun.toUpperFirst()}`,
      `${['', 'St.'].random()} ${lib.createName({ race: temple.associatedNPC.race })}'s ${data.name.soleNoun.random().toUpperFirst()}`
    ])),
    blessing: `${temple.blessingConvey}. ${temple.blessingGift}.`
  })

  lib.createReciprocalRelationship(town, temple, temple.associatedNPC, {
    relationship: 'caretaker',
    reciprocalRelationship: 'temple'
  })

  const rollDataVariables = ['wealth', 'size', 'cleanliness']
  for (const propName of rollDataVariables) {
    lib.defineRollDataGetter(temple, lib.templeRollData[propName].rolls, propName)
  }

  // These are the full sentence printouts referenced within TempleOutput.twee
  lib.assign(temple, {
    guardReadout: `This ${temple.wordNoun} is protected by ${temple.guardedBy}.`,
    aboutReadout: `Within this holy place they pray to ${temple.prayerSubject}. The temple itself was originally dedicated to ${temple.dedicated} and is known for ${temple.knownFor}.`,
    interiorReadout: `You enter the ${temple.size}, ${temple.cleanliness} ${temple.wordNoun} and notice ${temple.features}. The main room is ${temple.floorPlan} in shape and is decorated with mostly ${temple.wealth} looking ${['furniture', 'relics', 'holy statues', 'holy symbols', 'stained glass windows', 'holy art'].random()}. The interior walls of the ${temple.wordNoun} are ${temple.walls} and the the ceiling is ${temple.ceiling}. The ${temple.wordNoun} was designed by ${temple.architect} and it is ${temple.complex}.`,
    tippyDescription: `${lib.articles.output(temple.size).toUpperFirst()} and ${temple.cleanliness} ${temple.wordNoun} that is dedicated to ${temple.dedicated}`
  })

  return temple
}
