import { TownBasics, TownRolls } from '@lib'

export function calculateTax (nominalTarget: number, economics: number) {
  return nominalTarget + (-1 / (economics + 0.1)) + (1 / (10 - economics))
}

export function assignSizeModifiers (town: TownBasics) {
  console.log(`Assigning town size modifiers (btw ${town.name} is a ${town.type})`)
  assignRollModifiers(town, lib.townData.type[town.type].modifiers)
}

export function assignEconomicModifiers (town: TownBasics) {
  console.log(`Assigning economic modifiers (btw ${town.name} is a ${town.economicIdeology})`)
  assignRollModifiers(town, lib.townData.economicIdeology[town.economicIdeology].modifiers)
}

export function assignPoliticalModifiers (town: TownBasics) {
  console.log(`Assigning political ideology modifiers (btw ${town.name} is a ${town.politicalIdeology})`)
  assignRollModifiers(town, lib.townData.politicalIdeology[town.politicalIdeology].modifiers)
}

export function assignRollModifiers (town: TownBasics, modifiers: Record<TownRolls, number>) {
  for (const [key, modifier] of Object.entries(modifiers)) {
    const roll = key as TownRolls
    town.roll[roll] = lib.fm(town.roll[roll], modifier)
  }
}
