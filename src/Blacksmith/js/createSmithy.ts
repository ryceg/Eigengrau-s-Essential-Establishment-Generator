import { Building, NPC, Smithy, Town } from '@lib'

interface Options {
  newBuilding?(town: Town, type?: string): Building
  npc?: Partial<NPC>
}

// uses setup.createNPC, setup.createSmithyName
export const createSmithy = (town: Town, opts: Options = {}) => {
  const smithy = (opts.newBuilding || lib.createBuilding)(town, 'smithy') as Smithy
  console.groupCollapsed('Smithy loading...')
  smithy.associatedNPC = setup.createNPC(town, Object.assign({}, lib.smithyData.blacksmith, opts.npc))
  smithy.associatedNPC.owner = lib.random(lib.smithyData.owner)
  lib.createReciprocalRelationship(town, smithy, smithy.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
  setup.createSmithyName(town, smithy)
  lib.createStructure(town, smithy)
  lib.assign(smithy, {
    wordNoun: ['smithy', 'blacksmith', 'smithery', 'farrier shop'].random(),
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
    lib.defineRollDataGetter(smithy, lib.smithyData.rollData[propName].rolls, propName)
  }

  smithy.notableFeature = `its ${smithy.expertise} weapons and armour`
  smithy.tippyDescription = `${lib.articles.output(smithy.size).toUpperFirst()} ${smithy.wordNoun} that's ${smithy.cleanliness}, and is known for ${smithy.notableFeature}.`
  console.log(smithy)
  console.groupEnd()

  return smithy
}
