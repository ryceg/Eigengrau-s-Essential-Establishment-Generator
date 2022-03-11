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
import { createTownBiome } from './Town/js/createTownBiome'
import { createTownName } from './Town/js/createTownName'
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
import { getTownMilitary } from './Town/js/getTownMilitary'
import { getPoliticalSourceDescription } from './Town/js/getPoliticalSourceDescription'
import { exportToNovelAI } from './Tools/Exports/exportNovelAI'
// import { buildingTypes, createBuildingKeys, createNewBuilding } from './Town/js/createNewBuilding'

declare global {
  interface Setup {
    addGtagEvent: typeof addGtagEvent
    addSettingButton: typeof addSettingButton
    brothelData: typeof brothelData
    buildingTooltip: typeof buildingTooltip
    buildingTypes: typeof buildingTypes
    checkRaces: typeof checkRaces
    copyText: typeof copyText
    createAlchemist: typeof createAlchemist
    createBlacksmithProject: typeof createBlacksmithProject
    createBrothel: typeof createBrothel
    createDeadNPC: typeof createDeadNPC
    createDocks: typeof createDocks
    createFaction: typeof createFaction
    createGuardhouse: typeof createGuardhouse
    createGuardhouseName: typeof createGuardhouseName
    createMarriage: typeof createMarriage
    createNPC: typeof createNPC
    createParentage: typeof createParentage
    createPercentageTooltip: typeof createPercentageTooltip
    createRaceHTML: typeof createRaceHTML
    createReciprocalRelationshipNpc: typeof createReciprocalRelationshipNpc
    createRelationship: typeof createRelationship
    createReligionHTML: typeof createReligionHTML
    createSmithy: typeof createSmithy
    createSmithyName: typeof createSmithyName
    createSocioPolitics: typeof createSocioPolitics
    createStartBuildings: typeof createStartBuildings
    createStartFactions: typeof createStartFactions
    createTavern: typeof createTavern
    createTown: typeof createTown
    createTownBiome: typeof createTownBiome
    createTownName: typeof createTownName
    deleteBuilding: typeof deleteBuilding
    deleteFaction: typeof deleteFaction
    deleteNPC: typeof deleteNPC
    deleteThrowawayNPCs: typeof deleteThrowawayNPCs
    expandNPC: typeof expandNPC
    exportAsHtml: typeof exportAsHtml
    exportToNovelAI: typeof exportToNovelAI
    findIfExistsViaKey: typeof findIfExistsViaKey
    findPoliceSource: typeof findPoliceSource
    findViaKey: typeof findViaKey
    getEncounter: typeof getEncounter
    getEventDescription: typeof getEventDescription
    getFatherMother: typeof getFatherMother
    getLifeEvents: typeof getLifeEvents
    getLocation: typeof getLocation
    getPoliticalSourceDescription: typeof getPoliticalSourceDescription
    getTownMilitary: typeof getTownMilitary
    getWakeUpByWealth: typeof getWakeUpByWealth
    graveStone: typeof graveStone
    history: typeof history
    leaderFaction: typeof leaderFaction
    makeTippyTitle: typeof makeTippyTitle
    metricHeight: typeof metricHeight
    metricWeight: typeof metricWeight
    money: typeof money
    navigateToObj: typeof navigateToObj
    npcDeath: typeof npcDeath
    openDialog: typeof openDialog
    outputEverything: typeof outputEverything
    outputGMBinder: typeof outputGMBinder
    plothooks: typeof plothooks
    politicsDescription: typeof politicsDescription
    politicsTooltip: typeof politicsTooltip
    profile: typeof profile
    profileAgeTooltip: typeof profileAgeTooltip
    rerenderPage: typeof rerenderPage
    townSquare: typeof townSquare
    urlSeed: typeof urlSeed
    // createBuildingKeys: typeof createBuildingKeys
    // createNewBuilding: typeof createNewBuilding
  }
}

Object.assign(setup, {
  addGtagEvent,
  addSettingButton,
  brothelData,
  buildingTooltip,
  buildingTypes,
  checkRaces,
  copyText,
  createAlchemist,
  createBlacksmithProject,
  createBrothel,
  createDeadNPC,
  createDocks,
  createFaction,
  createGuardhouse,
  createGuardhouseName,
  createMarriage,
  createNPC,
  createParentage,
  createPercentageTooltip,
  createRaceHTML,
  createReciprocalRelationshipNpc,
  createRelationship,
  createReligionHTML,
  createSmithy,
  createSmithyName,
  createSocioPolitics,
  createStartBuildings,
  createStartFactions,
  createTavern,
  createTown,
  createTownBiome,
  createTownName,
  deleteBuilding,
  deleteFaction,
  deleteNPC,
  deleteThrowawayNPCs,
  expandNPC,
  exportAsHtml,
  exportToNovelAI,
  findIfExistsViaKey,
  findPoliceSource,
  findViaKey,
  getEncounter,
  getEventDescription,
  getFatherMother,
  getLifeEvents,
  getLocation,
  getPoliticalSourceDescription,
  getTownMilitary,
  getWakeUpByWealth,
  graveStone,
  history,
  leaderFaction,
  makeTippyTitle,
  metricHeight,
  metricWeight,
  money,
  navigateToObj,
  npcDeath,
  openDialog,
  outputEverything,
  outputGMBinder,
  plothooks,
  politicsDescription,
  politicsTooltip,
  profile,
  profileAgeTooltip,
  rerenderPage,
  townSquare,
  urlSeed
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
