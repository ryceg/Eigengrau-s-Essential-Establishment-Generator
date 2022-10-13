/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Brothel, Building, NPC, Town } from '@lib'
import { createNPC } from '../../NPCGeneration/createNPC'
import { brothelData } from './brothelData'

interface Options {
  newBuilding(town: Town, type?: string): Brothel
  npc: Partial<NPC>
}

export const createBrothel = (town: Town, opts: Partial<Options> = {}): Brothel => {
  lib.logger.info('Creating a brothel...')
  const brothel = (lib.createBuilding || opts.newBuilding)(town, 'brothel', opts as Partial<Brothel>)

  lib.assign(brothel, {
    name: lib.random(brothelData.name),
    passageName: 'BrothelOutput',
    initPassage: 'BrothelOutput',
    localImage: 'brothel-illustration',
    buildingType: 'brothel',
    objectType: 'building',
    needsWordNoun: true,
    wordNoun: lib.random(['brothel', 'whorehouse', "gentleman's club", 'bordello', 'cathouse', 'house of ill-repute', 'massage parlor', 'den of vice']),
    specialty: lib.random(brothelData.specialty),
    talk: lib.random(brothelData.talk()),
    rumour: lib.random(brothelData.rumour),
    notice: lib.random(brothelData.notice()),
    idle: lib.random(brothelData.idle()),
    owner: lib.random(lib.keys(brothelData.pimp))
  })
  brothel.notableFeature = `${brothel.specialty} and being owned by ${brothel.owner}`
  lib.createStructure(town, brothel as Building)
  const rollDataVariables = ['wealth', 'size', 'cleanliness'] as const
  for (const propName of rollDataVariables) {
    // @ts-ignore
    lib.defineRollDataGetter(brothel, lib.brothelRollData[propName].rolls, propName)
  }
  brothel.associatedNPC = createNPC(town, {
    ...brothelData.pimp[brothel.owner],
    isShallow: true,
    hasClass: false
  })
  brothel.associatedNPC.title = lib.genderData[brothel.associatedNPC.gender].domTitle
  brothel.associatedNPC.greeting = [
    'nods at you', 'welcomes you warmly', 'smiles, greets you', 'raises a hand with a wave', 'sizes you up, before $associatedNPC.heshe nods at you', 'checks you out for just a moment before smiling at you', 'waves slightly in your direction', 'gives you you a slight nod', 'turns your way', 'frowns, but greets you just the same'
  ]

  lib.createReciprocalRelationship(town, brothel as Building, brothel.associatedNPC, {
    relationship: 'pimp',
    reciprocalRelationship: 'business',
    description: `Owns ${brothel.name}.`
  })

  lib.logger.info(brothel)
  return brothel as Brothel
}
