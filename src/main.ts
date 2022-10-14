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
import { profileAgeTooltip, metricHeight, metricWeight, buildingTooltip, createPercentageTooltip, createRaceHTML, createReligionHTML, politicsDescription, politicsTooltip, makeTippyTitle } from './Settings/Tippy/tooltips'
import { createNPC } from './NPCGeneration/createNPC'
import { deleteNPC, deleteThrowawayNPCs } from './NPCGeneration/deleteNPC'
import { getLifeEvents } from './NPCGeneration/getLifeEvents'
import { openDialog, rerenderPage } from './Dialog/openDialog'
import { addSettingButton } from './Settings/settingButton'
import { getLocation, getEncounter, getEventDescription } from './World/events'
import { graveStone } from './World/graveStone'
import { urlSeed, navigateToObj } from './World/urlSeed'
import { deleteFaction } from './Factions/deleteFaction'
import { leaderFaction } from './Factions/leader'
import { plothooks } from './PlotHook/plothooks'
import { marketEvent } from './MiniEstablishments/Market/marketEventData'
import { createTown } from './Town/js/createTown'
import { findViaKey, findIfExistsViaKey } from './Tools/findViaKey'
import { createBlacksmithProject } from './Blacksmith/js/blacksmithProject'
import { createSmithyName } from './Blacksmith/js/createSmithyName'
import { createSmithy } from './Blacksmith/js/createSmithy'
import { createReciprocalRelationshipNpc } from './Buildings/Components/buildingRelationshipNpc'
import { outputEverything } from './Tools/Exports/outputEverything'
import { exportAsHtml } from './Tools/Exports/exportAsHtml'
import { outputGMBinder } from './Tools/Exports/outputGMBinder'
import { copyText } from './Tools/Exports/clipboard'
import { createGuardhouse, createGuardhouseName } from './MiniEstablishments/Guardhouse/createGuardhouse'
import { createStartBuildings } from './Town/js/createStartBuildings'
import { npcDeath, createDeadNPC } from './NPCGeneration/setupDeath'
import { createStartFactions } from './Town/js/createStartFactions'
import { buildingTypes } from './Town/js/buildingTypes'
import { createFaction } from './Factions/createFaction'
import { getPoliticalSourceDescription } from './Town/js/getPoliticalSourceDescription'
import { exportToNovelAI } from './Tools/Exports/exportNovelAI'
import { populateGoodsAndServices } from './Buildings/populateGoodsAndServices'
import { getTownMilitary } from './Town/js/getTownMilitary'
// import { buildingTypes, createBuildingKeys, createNewBuilding } from './Town/js/createNewBuilding'

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
    createPercentageTooltip: typeof createPercentageTooltip
    createRaceHTML: typeof createRaceHTML
    createReligionHTML: typeof createReligionHTML
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
    navigateToObj: typeof navigateToObj
    deleteFaction: typeof deleteFaction
    leaderFaction: typeof leaderFaction
    plothooks: typeof plothooks
    marketEvent: typeof marketEvent
    createTown: typeof createTown
    findViaKey: typeof findViaKey
    findIfExistsViaKey: typeof findIfExistsViaKey
    createBlacksmithProject: typeof createBlacksmithProject
    createSmithyName: typeof createSmithyName
    createSmithy: typeof createSmithy
    createReciprocalRelationshipNpc: typeof createReciprocalRelationshipNpc
    outputEverything: typeof outputEverything
    exportAsHtml: typeof exportAsHtml
    outputGMBinder: typeof outputGMBinder
    copyText: typeof copyText
    createGuardhouse: typeof createGuardhouse
    createGuardhouseName: typeof createGuardhouseName
    createStartBuildings: typeof createStartBuildings
    npcDeath: typeof npcDeath
    createDeadNPC: typeof createDeadNPC
    createStartFactions: typeof createStartFactions
    buildingTypes: typeof buildingTypes
    createFaction: typeof createFaction
    getPoliticalSourceDescription: typeof getPoliticalSourceDescription
    exportToNovelAI: typeof exportToNovelAI
    getTownMilitary: typeof getTownMilitary
    // createBuildingKeys: typeof createBuildingKeys
    // createNewBuilding: typeof createNewBuilding
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
  getTownMilitary,
  metricHeight,
  metricWeight,
  buildingTooltip,
  createPercentageTooltip,
  createRaceHTML,
  createReligionHTML,
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
  navigateToObj,
  deleteFaction,
  leaderFaction,
  plothooks,
  marketEvent,
  createTown,
  findViaKey,
  findIfExistsViaKey,
  createBlacksmithProject,
  createSmithyName,
  createSmithy,
  createReciprocalRelationshipNpc,
  outputEverything,
  exportAsHtml,
  copyText,
  outputGMBinder,
  createGuardhouse,
  createGuardhouseName,
  createStartBuildings,
  npcDeath,
  createDeadNPC,
  createStartFactions,
  buildingTypes,
  createFaction,
  getPoliticalSourceDescription,
  exportToNovelAI
  // createBuildingKeys,
  // createNewBuilding
})

/**
 * Initializes the data structures.
 *
 * Since some objects depends on others,
 * the order is very important.
 */
setup.init = (setup => () => {
  lib.logger.info('initialising random')
  lib.setRandom(random)
  lib.setRandomFloat(randomFloat)

  setup.initMisc()
  setup.initNpcData()
  setup.initTavernData()
  lib.logger.info('initialising goods and services')
  setup.initGoodsAndServices()
  lib.logger.info('populating goods and services')
  setup.goodsAndServices = populateGoodsAndServices(setup.goodsAndServices)
  setup.initDocks()
  setup.initCastle()
  setup.initBuildingTypes()
})(setup)
