import { Docks, NPC, Town } from '@lib'

interface Options {
  newBuilding(town: Town, type?: string): Docks
  npc: Partial<NPC>
}

// uses setup.createNPC
export const createDocks = (town: Town, opts: Options) => {
  const createBuilding = opts.newBuilding || lib.createBuilding

  const docks = createBuilding(town, 'docks')
  Object.assign(docks, {
    notableFeature: lib.random(lib.docksData.notableFeature),
    notice: lib.random(lib.docksData.notice),
    passageName: 'DocksOutput',
    initPassage: 'DocksOutput',
    buildingType: 'docks',
    objectType: 'building',
    needsWordNoun: false,
    associatedNPC: setup.createNPC(town, Object.assign({
      isShallow: true,
      profession: 'stevedore'
    }, opts.npc)),
    wordNoun: lib.random(['docks', 'pier', 'wharf', 'dockyard', 'shipyard', 'quay', 'staithe', 'marina', 'jetty', 'harbor', 'berth', 'port', 'seaport', 'dockyard']),
    ships: {}
  })
  lib.createReciprocalRelationship(town, docks, docks.associatedNPC, { relationship: 'stevedore', reciprocalRelationship: 'place of employment' })

  docks.name = lib.toTitleCase(
    lib.random([
      `The ${lib.random(
          ['Old', 'New', '', '']
        )} ${lib.random(
          [`${town.name}`, `${town.name}`, '', '', '']
        )} ${docks.wordNoun.toUpperFirst()}`,
    `${lib.random([
      docks.associatedNPC.lastName,
      `${docks.associatedNPC.firstName}'s`,
      `${lib.random([
        docks.associatedNPC.firstName,
        docks.associatedNPC.lastName
      ])} Beach`
    ])} ${docks.wordNoun}`
    ])
  )

  const rollDataVariables = [
    ['size', 'size'],
    ['cleanliness', 'cleanliness'],
    ['activity', 'activity'],
    ['size', 'sizeDescriptive', 2],
    ['cleanliness', 'cleanlinessDescriptive', 2],
    ['activity', 'activityDescriptive']
  ] as const
  for (const [key, propName, rollLocation] of rollDataVariables) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    lib.defineRollDataGetter(docks, lib.docksData.rollData[key].rolls, propName, key, rollLocation)
  }

  // lib.defineRollDataGetter(docks, lib.docksData.rollData.size.rolls, 'sizeDescriptive', 'size', 2)
  // lib.defineRollDataGetter(docks, lib.docksData.rollData.cleanliness.rolls, 'cleanlinessDescriptive', 'cleanliness', 2)
  // lib.defineRollDataGetter(docks, lib.docksData.rollData.activity.rolls, 'activityDescriptive', 'activity')
  docks.tippyDescription = `${lib.articles.output(docks.wordNoun).toUpperFirst()} that's ${docks.size}. It is ${docks.cleanliness}, and is known for ${docks.notableFeature}.`
  lib.docksData.ships.create(town, docks, {})

  return docks
}
