/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Alchemist, Building, NPC, Town } from '@lib'

interface Options {
  newBuilding(): Building
  newChemist(): NPC
}

/**
 * Creates an alchemist building.
 * @warn Uses setup.createNPC
 */
export const createAlchemist = (town: Town, opts: Partial<Options> = {}): Alchemist => {
  console.groupCollapsed('Alchemist loading...')

  const createBuilding = opts.newBuilding || lib.createBuilding
  const alchemist = createBuilding(town, 'alchemist')

  // @ts-ignore
  const createChemist = opts.newChemist || setup.createChemist
  const associatedNPC = createChemist(town, opts) as NPC

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
    lib.defineRollDataGetter(alchemist, rolls, propName)
  }

  lib.alchemistModifiers(alchemist)

  console.groupEnd()
  return alchemist
}
