
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Alchemist, Building, NPC, Town } from '@lib'
import { createChemist } from './createChemist'

interface Options {
  newBuilding(town: Town, type: string): Building
  npc: Partial<NPC>
}

/**
 * Creates an alchemist building.
 */
export const createAlchemist = (town: Town, opts: Partial<Options> = {}): Alchemist => {
  lib.logger.openGroup('Alchemist loading...')

  const createBuilding = opts.newBuilding || lib.createBuilding
  const alchemist = createBuilding(town, 'alchemist', opts as Partial<Building>)

  const associatedNPC = createChemist(town, opts)

  lib.createReciprocalRelationship(town, alchemist, associatedNPC, {
    relationship: 'owner',
    reciprocalRelationship: 'business'
  })

  lib.assign(alchemist, {
    associatedNPC,
    localImage: 'alchemist-illustration',
    wordNoun: lib.random(['alchemist', 'potion shop', 'apothecary', 'alchemist']),
    passageName: 'AlchemistOutput',
    initPassage: 'InitAlchemist',
    buildingType: 'alchemist',
    objectType: 'building',
    notableFeature: lib.random(['its love potions', 'its herbal remedies', 'its magical potions', 'its wonderful tonics', 'its fantastic ointments']),
    name: lib.createAlchemistName(associatedNPC.firstName)
  })

  lib.createStructure(town, alchemist)

  for (const propName of ['wealth', 'size', 'cleanliness', 'expertise'] as const) {
    const { rolls } = lib.alchemistRollData[propName]
    // @ts-ignore (Apparently BuildingRoll is not indexable. Should be fixable, somehow?)
    lib.defineRollDataGetter(alchemist, rolls, propName)
  }

  lib.alchemistModifiers(alchemist)

  lib.logger.closeGroup()
  return alchemist
}
