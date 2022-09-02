import { Building, NPC, Smithy, Town } from '@lib'

interface Options {
  newBuilding?(town: Town, type?: string): Building
  npc?: Partial<NPC>
}

// uses setup.createNPC, setup.createSmithyName
export const createSmithy = (town: Town, opts: Partial<Options> = {}) => {
  lib.logger.openGroup('Smithy loading...')

  const createBuilding = opts.newBuilding || lib.createBuilding
  const smithy = createBuilding(town, 'smithy', opts as Partial<Building>) as Smithy

  smithy.associatedNPC = setup.createNPC(town, Object.assign({}, lib.smithyData.blacksmith, opts.npc))
  smithy.associatedNPC.owner = lib.random(lib.smithyData.owner)

  lib.createReciprocalRelationship(town, smithy, smithy.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
  setup.createSmithyName(town, smithy)
  lib.createStructure(town, smithy)
  lib.assign(smithy, {
    wordNoun: lib.random(['smithy', 'blacksmith', 'smithery', 'farrier shop']),
    passageName: 'SmithyOutput',
    initPassage: 'InitSmithy',
    buildingType: 'smithy',
    objectType: 'building'
  })

  if (smithy.structure) smithy.structure.descriptor = `${smithy.structure.material.wealth} ${smithy.structure.material.noun} ${smithy.wordNoun} with ${lib.articles.output(smithy.structure.roof.verb)} roof`

  const rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise', 'activity'] as const

  for (const propName of rollDataVariables) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    lib.defineRollDataGetter(smithy, lib.smithyRollData[propName].rolls, propName)
  }

  smithy.notableFeature = `its ${smithy.expertise} weapons and armour`
  smithy.tippyDescription = `${lib.articles.output(smithy.size).toUpperFirst()} ${smithy.wordNoun} that's ${smithy.cleanliness}, and is known for ${smithy.notableFeature}.`

  lib.logger.info(smithy)
  lib.logger.closeGroup()

  return smithy
}
