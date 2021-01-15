// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * Tweego ignores TS files; they won't be imported into the final app. Rollup
 * bundles all the code imported here into a single JS file (`/src/init.js`) to be
 * loaded by Tweego alongside loose scripts in `/src`
*/
import { createAlchemist } from './Alchemist/js/createAlchemist'
import { deleteBuilding } from './Buildings/deleteBuilding'
import { createMarriage, createParentage } from './NPCGeneration/Relationships/createFamilyMembers'
import { createRelationship } from './NPCGeneration/Relationships/createRelationship'
import { getFatherMother } from './NPCGeneration/Relationships/getFatherMother'
import { checkRaces } from './NPCGeneration/checkRaces'
import { getWakeUpByWealth } from './Tavern/js/getWakeUpByWealth'
import { createTavern } from './Tavern/js/createTavern'
import { expandNPC } from './NPCGeneration/expandNPC'
import { profile } from './NPCGeneration/profile'
import { money } from './Tools/money'
import { getPriceMod } from './Tools/getPriceMod'
import { history } from './Tools/history'
import { addGtagEvent } from './Tools/addGtagEvent'
import { tippy } from './Settings/Tippy/tippy'
import { profileTooltip, profileAgeTooltip, metricHeight, metricWeight, buildingTooltip, politicsDescription, politicsTooltip } from './Settings/Tippy/tooltips'
import { createNPC } from './NPCGeneration/createNPC'
import { deleteNPC, deleteThrowawayNPCs } from './NPCGeneration/deleteNPC'
import { getLifeEvents } from './NPCGeneration/getLifeEvents'
import { graveStone } from './World/graveStone'
import { urlSeed } from './World/urlSeed'
import { deleteFaction } from './Factions/deleteFaction'
import { leaderFaction } from './Factions/leader'
import { plothooks } from './PlotHook/plothooks'

declare global {
  interface Setup {
    createAlchemist: typeof createAlchemist
    deleteBuilding: typeof deleteBuilding
    createMarriage: typeof createMarriage
    createParentage: typeof createParentage
    createRelationship: typeof createRelationship
    getFatherMother: typeof getFatherMother
    checkRaces: typeof checkRaces
    expandNPC: typeof expandNPC
    profile: typeof profile
    getWakeUpByWealth: typeof getWakeUpByWealth
    createTavern: typeof createTavern
    money: typeof money
    getPriceMod: typeof getPriceMod
    history: typeof history
    addGtagEvent: typeof addGtagEvent
    tippy: typeof tippy
    profileTooltip: typeof profileTooltip
    profileAgeTooltip: typeof profileAgeTooltip
    metricHeight: typeof metricHeight
    metricWeight: typeof metricWeight
    buildingTooltip: typeof buildingTooltip
    politicsDescription: typeof politicsDescription
    politicsTooltip: typeof politicsTooltip
    createNPC: typeof createNPC
    deleteNPC: typeof deleteNPC
    deleteThrowawayNPCs: typeof deleteThrowawayNPCs
    getLifeEvents: typeof getLifeEvents
    getPriceMod: typeof getPriceMod
    graveStone: typeof graveStone
    urlSeed: typeof urlSeed
    deleteFaction: typeof deleteFaction
    leaderFaction: typeof leaderFaction
    plothooks: typeof plothooks
  }
}

Object.assign(setup, {
  createAlchemist,
  deleteBuilding,
  createMarriage,
  createParentage,
  createRelationship,
  getFatherMother,
  checkRaces,
  expandNPC,
  profile,
  getWakeUpByWealth,
  createTavern,
  money,
  getPriceMod,
  history,
  addGtagEvent,
  tippy,
  profileTooltip,
  profileAgeTooltip,
  metricHeight,
  metricWeight,
  buildingTooltip,
  politicsDescription,
  politicsTooltip,
  createNPC,
  deleteNPC,
  deleteThrowawayNPCs,
  getLifeEvents,
  graveStone,
  urlSeed,
  deleteFaction,
  leaderFaction,
  plothooks
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
