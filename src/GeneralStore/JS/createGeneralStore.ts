/* eslint-disable @typescript-eslint/ban-ts-comment */
import { articles, Building, createBuildingRelationship, createStructure, defineRollDataGetter, generalStoreModifiers, NPC, Town } from '@lib'

interface Options {
  newBuilding?(town: Town, type?: string): Building
  npc?: Partial<NPC>
}

// uses setup.createNPC, setup.createGeneralStoreName
export const createGeneralStore = (town: Town, opts: Options = {}) => {
  const createBuilding = opts.newBuilding || createBuilding
  // @ts-ignore
  const createShopkeep = opts.newShopkeep || setup.createNPC

  const generalStore = createBuilding(town, 'generalStore')
  console.groupCollapsed('General Store loading...')
  generalStore.associatedNPC = createShopkeep(town, Object.assign({
    profession: 'merchant',
    mundane: ['pliers', 'tins', 'twine', 'cups', 'spoons', 'pans', 'chairs', 'cushions'],
    greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'checks you out for just a moment before smiling at you'],
    owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'manager', 'assistant manager', 'acting manager'].random()
  }, opts.npc))
  createBuildingRelationship(town, generalStore, generalStore.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
  Object.assign(generalStore, {
    note: generalStore.get.note(generalStore),
    shopkeepNote: generalStore.get.shopkeepNote(generalStore),
    say: generalStore.get.say(generalStore),
    wordNoun: ['general store', 'shop'].random(),
    crud: generalStore.crud.random(),
    idle: generalStore.idle.random(),
    notableFeature: 'wide range of goods on sale',
    passageName: 'generalStoreOutput',
    initPassage: 'InitgeneralStore',
    buildingType: 'generalStore'
  })
  createStructure(town, generalStore)
  generalStore.structure.descriptor = `${articles.output(generalStore.structure.material.wealth)} ${generalStore.structure.material.noun} ${generalStore.wordNoun} with ${articles.output(generalStore.structure.roof.verb)} roof`
  setup.createGeneralStoreName(town, generalStore)
  generalStoreModifiers(town, generalStore)

  const props = ['wealth', 'cleanliness', 'size', 'expertise']
  for (const propName of props) {
    defineRollDataGetter(generalStore, generalStore.rollData[propName].rolls, propName)
  }

  if (generalStore.roll.cleanliness <= 40) {
    generalStore.clutter = [
      `The store has a lot of ${generalStore.crud} laying about.`,
      `The front counter is cluttered with ${generalStore.crud}.`,
      `In one corner of the store there is a large pile of ${generalStore.crud}.`,
      `Several bins seemed to be cluttered with ${generalStore.crud}.`].random()
  }
  // generalStoreRenders(generalStore)
  console.log(generalStore)
  console.groupEnd()
  return generalStore
}
