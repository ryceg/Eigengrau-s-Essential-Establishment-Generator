import { Building, NPC, Town } from '@lib'

interface Options {
  newBuilding(town: Town, type?: string, opts?: Partial<Options>): Guardhouse
  npc: Partial<NPC>
}

export interface Guardhouse extends Building {
  expertise: string
  notableFeature: string
}

export const createGuardhouse = (town: Town, opts: Options) => {
  const guardhouse = (opts.newBuilding || lib.createBuilding)(town, 'guardhouse', opts)

  lib.assign(guardhouse, {
    initPassage: 'GuardhouseOutput',
    passageName: 'GuardhouseOutput',
    localImage: 'guardhouse-illustration',
    buildingType: 'guardhouse',
    objectType: 'building',
    wordNoun: lib.guardhouseData.name.wordNoun.random(),
    needsWordNoun: false,
    associatedNPC: setup.createNPC(town, { profession: 'guard', ...opts.npc })
  })
  lib.createReciprocalRelationship(town, guardhouse, guardhouse.associatedNPC, { relationship: 'worker', reciprocalRelationship: 'place of employment' })
  guardhouse.notableFeature = lib.weightedRandomFetcher(town, lib.guardhouseData.notableFeature, guardhouse, undefined, 'function') as string

  guardhouse.name = createGuardhouseName(town)
  lib.createStructure(town, guardhouse)
  const props = ['cleanliness', 'expertise']
  for (const propName of props) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    lib.defineRollDataGetter(guardhouse, lib.guardhouseRollData[propName].rolls, propName)
  }
  guardhouse.tippyDescription = `A ${guardhouse.wordNoun} whose guards are ${guardhouse.expertise}. It is known for ${guardhouse.notableFeature}`
  return guardhouse
}

export const createGuardhouseName = (town: Town) => {
  const potentialUniqueNames = [
    'Emberhead Garrison',
    'Nightwatch',
    'Bulwark',
    'The Compass',
    'The Watchtower',
    'The Veil',
    'Watch Headquarters',
    'Bastion',
    'Hillside Watchtower'
  ]
  if (random(3) > 2) {
    return lib.toTitleCase(lib.random(potentialUniqueNames))
  } else {
    return lib.toTitleCase(lib.random([
      `The ${town.type} ${lib.random(lib.guardhouseData.name.wordNoun)}`,
      `The ${lib.random(lib.guardhouseData.name.adjective)} ${lib.random(lib.guardhouseData.name.wordNoun)}`,
      `The ${lib.random(lib.guardhouseData.name.adjective)} ${town.type} ${lib.random(lib.guardhouseData.name.wordNoun)}`
    ]))
  }
}
