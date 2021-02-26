// import { Pantheon } from '../../lib/religion/religion'

// export const getPantheon = (town: Town): Pantheon => {
//   if (!town) town = State.variables.town
//   if (isUsingCustomPantheon()) return getCustomPantheon()
//   return lib.religion.pantheon[town.religion.pantheon]
// }

// export const getPantheonNames = () => {
//   return Object.keys(getAllPantheons())
// }

// export const getAllPantheons = () => {
//   const pantheons: Record<string, Pantheon> = Object.assign({}, lib.religion.pantheon)
//   if (isUsingCustomPantheon()) {
//     const customPantheon = getCustomPantheon()
//     pantheons[customPantheon.name] = customPantheon
//   }
//   return pantheons
// }

// export const isUsingCustomPantheon = (town: Town) => {
//   if (!town) town = State.variables.town
//   if (lib.religion.pantheon[town.religion.pantheon]) return false
//   return true
// }

// export const getCustomPantheon = (): Pantheon | undefined => {
//   if (State.metadata.has('pantheon')) {
//     return State.metadata.get('pantheon')
//   }
//   return undefined
// }
