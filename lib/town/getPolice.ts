import { Town } from './_common'

export function getPoliceKey (town: Town) {
  const policeFactions = []
  const factionSource = town.factions
  for (const factionKey of Object.keys(factionSource)) {
    if (factionSource[factionKey].isPolicing) {
      policeFactions.push(factionKey)
    }
  }
  return policeFactions
}

export function getPolice (town: Town) {
  const factionSource = town.factions
  const policeFactionsArray = getPoliceKey(town)
  const policeFactions = []
  if (policeFactionsArray.length > 0) {
    for (const item in policeFactionsArray) {
      policeFactions.push(factionSource[item])
    }
    return policeFactions
  } else {
    return factionSource[policeFactionsArray[0]]
  }
}
