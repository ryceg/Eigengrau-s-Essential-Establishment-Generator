// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * Tweego ignores TS files; they won't be imported into the final app. Rollup
 * bundles all the code imported here into a single JS file (`/src/init.js`) to be
 * loaded by Tweego alongside loose scripts in `/src`
*/
import { createAlchemist } from './Alchemist/js/createAlchemist'
import { brothelData } from './MiniEstablishments/Brothel/brothelData'
import { createBrothel } from './MiniEstablishments/Brothel/createBrothel'
import { townSquare } from './MiniEstablishments/TownSquare/townSquareData'
import { deleteBuilding } from './Buildings/deleteBuilding'
import { createMarriage, createParentage } from './NPCGeneration/Relationships/createFamilyMembers'
import { createRelationship } from './NPCGeneration/Relationships/createRelationship'
import { createSocioPolitics } from './Town/js/createSocioPolitics'
import { findPoliceSource } from './Town/js/findPoliceSource'
import { getFatherMother } from './NPCGeneration/Relationships/getFatherMother'
import { checkRaces } from './NPCGeneration/checkRaces'
import { getWakeUpByWealth } from './Tavern/js/getWakeUpByWealth'
import { createTavern } from './Tavern/js/createTavern'
import { expandNPC } from './NPCGeneration/expandNPC'
import { profile } from './Tools/profile'
import { money } from './Tools/money'
import { history } from './Tools/history'
import { addGtagEvent } from './Tools/addGtagEvent'
import { profileAgeTooltip, metricHeight, metricWeight, buildingTooltip, racesPercentageTooltip, createRaceHTML, politicsDescription, politicsTooltip, makeTippyTitle } from './Settings/Tippy/tooltips'
import { createNPC } from './NPCGeneration/createNPC'
import { deleteNPC, deleteThrowawayNPCs } from './NPCGeneration/deleteNPC'
import { getLifeEvents } from './NPCGeneration/getLifeEvents'
import { openDialog, rerenderPage } from './Dialog/openDialog'
import { addSettingButton } from './Settings/settingButton'
import { getLocation, getEncounter, getEventDescription } from './World/events'
import { graveStone } from './World/graveStone'
import { urlSeed } from './World/urlSeed'
import { deleteFaction } from './Factions/deleteFaction'
import { leaderFaction } from './Factions/leader'
import { plothooks } from './PlotHook/plothooks'
import { createTownBiome } from './Town/js/createTownBiome'
import { createTownName } from './Town/js/createTownName'
import { createTown, getTownType } from './Town/js/createTown'
import { findViaKey } from './Tools/findViaKey'

declare global {
  interface Setup {
    createAlchemist: typeof createAlchemist
    brothelData: typeof brothelData
    createBrothel: typeof createBrothel
    deleteBuilding: typeof deleteBuilding
    createMarriage: typeof createMarriage
    createParentage: typeof createParentage
    createRelationship: typeof createRelationship
    createSocioPolitics: typeof createSocioPolitics
    findPoliceSource: typeof findPoliceSource
    getFatherMother: typeof getFatherMother
    checkRaces: typeof checkRaces
    expandNPC: typeof expandNPC
    profile: typeof profile
    getWakeUpByWealth: typeof getWakeUpByWealth
    createTavern: typeof createTavern
    money: typeof money
    history: typeof history
    addGtagEvent: typeof addGtagEvent
    profileAgeTooltip: typeof profileAgeTooltip
    metricHeight: typeof metricHeight
    metricWeight: typeof metricWeight
    buildingTooltip: typeof buildingTooltip
    racesPercentageTooltip: typeof racesPercentageTooltip
    createRaceHTML: typeof createRaceHTML
    politicsDescription: typeof politicsDescription
    politicsTooltip: typeof politicsTooltip
    makeTippyTitle: typeof makeTippyTitle
    createNPC: typeof createNPC
    deleteNPC: typeof deleteNPC
    deleteThrowawayNPCs: typeof deleteThrowawayNPCs
    getLifeEvents: typeof getLifeEvents
    openDialog: typeof openDialog
    rerenderPage: typeof rerenderPage
    addSettingButton: typeof addSettingButton
    getLocation: typeof getLocation
    getEncounter: typeof getEncounter
    getEventDescription: typeof getEventDescription
    graveStone: typeof graveStone
    townSquare: typeof townSquare
    urlSeed: typeof urlSeed
    deleteFaction: typeof deleteFaction
    leaderFaction: typeof leaderFaction
    plothooks: typeof plothooks
    createTownBiome: typeof createTownBiome
    createTownName: typeof createTownName
    createTown: typeof createTown
    getTownType: typeof getTownType
    findViaKey: typeof findViaKey
  }
}

Object.assign(setup, {
  createAlchemist,
  brothelData,
  createBrothel,
  deleteBuilding,
  createMarriage,
  createParentage,
  createRelationship,
  createSocioPolitics,
  findPoliceSource,
  getFatherMother,
  checkRaces,
  expandNPC,
  profile,
  getWakeUpByWealth,
  createTavern,
  money,
  history,
  addGtagEvent,
  profileAgeTooltip,
  metricHeight,
  metricWeight,
  buildingTooltip,
  racesPercentageTooltip,
  createRaceHTML,
  politicsDescription,
  politicsTooltip,
  makeTippyTitle,
  createNPC,
  deleteNPC,
  deleteThrowawayNPCs,
  getLifeEvents,
  openDialog,
  rerenderPage,
  addSettingButton,
  getLocation,
  getEncounter,
  getEventDescription,
  graveStone,
  townSquare,
  urlSeed,
  deleteFaction,
  leaderFaction,
  plothooks,
  createTownBiome,
  createTownName,
  createTown,
  getTownType,
  findViaKey
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
  setup.initNpcData()
  setup.initTavernData()
  setup.initGoodsAndServices()
  setup.initDocks()
  setup.initCastle()
  setup.initBuildingTypes()
})(setup)
