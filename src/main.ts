// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * Tweego ignores TS files; they won't be imported into the final app. Rollup
 * bundles all the code imported here into a single JS file (`/src/init.js`) to be
 * loaded by Tweego alongside loose scripts in `/src`
*/
import { createMarriage, createParentage, createRelative } from './NPCGeneration/Relationships/createFamilyMembers'
import { createRelationship } from './NPCGeneration/Relationships/createRelationship'
import { createSexuality } from './NPCGeneration/Relationships/createSexuality'
import { createFriends } from './NPCGeneration/Relationships/createFriends'
import { getFamily } from './NPCGeneration/Relationships/getFamily'
import { getFatherMother } from './NPCGeneration/Relationships/getFatherMother'
import { checkRaces } from './NPCGeneration/checkRaces'
import { createDebt } from './NPCGeneration/createDebt'
import { getWakeUpByWealth } from './Tavern/js/getWakeUpByWealth'
import { createBartender } from './Tavern/js/createBartender'
import { createTavern } from './Tavern/js/createTavern'

declare global {
  interface Setup {
    createMarriage: typeof createMarriage
    createParentage: typeof createParentage
    createRelative: typeof createRelative
    createRelationship: typeof createRelationship
    createSexuality: typeof createSexuality
    createFriends: typeof createFriends
    getFamily: typeof getFamily
    getFatherMother: typeof getFatherMother
    checkRaces: typeof checkRaces
    createDebt: typeof createDebt
    getWakeUpByWealth: typeof getWakeUpByWealth
    createBartender: typeof createBartender
    createTavern: typeof createTavern
  }
}

Object.assign(setup, {
  createMarriage,
  createParentage,
  createRelative,
  createRelationship,
  createSexuality,
  createFriends,
  getFamily,
  getFatherMother,
  checkRaces,
  createDebt,
  getWakeUpByWealth,
  createBartender,
  createTavern
})

/**
 * Initializes the data structures.
 *
 * Since some objects depends on others,
 * the order is very important.
 */
setup.init = (setup => () => {
  lib.setRandom(random)
  lib.setRandomFloat(randomFloat)

  setup.initMisc()
  setup.initMiscEncounters()
  setup.initMiscLocations()
  setup.initNpcData()
  setup.initTavernData()
  setup.initGoodsAndServices()
  setup.initDocks()
  setup.initCastle()
  setup.initBuildingTypes()
})(setup)
