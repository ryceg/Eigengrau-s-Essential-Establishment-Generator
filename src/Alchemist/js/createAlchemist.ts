/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Alchemist, Building, NPC, Town } from '@lib'
import { createChemist } from './createChemist'

interface Options {
  newBuilding(town: Town, type: string): Building
  npc: Partial<NPC>
}

/**
 * Creates an alchemist building.
 * @warn Uses setup.createNPC
 */
export const createAlchemist = (town: Town, opts: Partial<Options> = {}): Alchemist => {
  console.groupCollapsed('Alchemist loading...')

  const createBuilding = opts.newBuilding || lib.createBuilding
  const alchemist = createBuilding(town, 'alchemist')

  const associatedNPC = createChemist(town, opts)

  lib.createBuildingRelationship(town, alchemist, associatedNPC, {
    relationship: 'owner',
    reciprocalRelationship: 'business'
  })

  lib.assign(alchemist, {
    associatedNPC,
    wordNoun: lib.random(['alchemist', 'potion shop', 'apothecary', 'alchemist']),
    passageName: 'AlchemistOutput',
    initPassage: 'InitAlchemist',
    buildingType: 'alchemist',
    notableFeature: lib.random(['its love potions', 'its herbal remedies', 'its magical potions', 'its wonderful tonics', 'its fantastic ointments']),
    name: lib.createAlchemistName(associatedNPC.firstName)
  })

  lib.createStructure(town, alchemist)

  const { structure } = alchemist
  if (structure) {
    lib.assign(structure, {
      alchemistDescriptor: `${structure.material.wealth} ${structure.material.noun} ${alchemist.wordNoun} with ${lib.articles.output(structure.roof.verb)} roof`
    })
  }

  for (const propName of ['wealth', 'size', 'cleanliness', 'expertise'] as const) {
    const { rolls } = lib.alchemistData.rollData[propName]
    // @ts-ignore (Apparently BuildingRoll is not indexable. Should be fixable, somehow?)
    lib.defineRollDataGetter(alchemist, rolls, propName)
  }

  lib.alchemistModifiers(alchemist)

  console.groupEnd()
  return alchemist
}
