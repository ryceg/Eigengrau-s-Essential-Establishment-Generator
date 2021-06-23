import { NPC } from './_common'
import { calcPercentage } from '../src/calcPercentage'
import { Town } from '../town/_common'
import { findProfession } from '../src/findProfession'
import { LifestyleStandard, lifestyleStandards } from './lifestyleStandards'
import { socialClass } from './socialClass'
import { keys } from '../src/utils'

/** `town.roll.wealth` increases or decreases npc.professionLuck by up to 10%, reflecting the strength of the economy. The expected range is between -25 and 25. */
export function wageVariation (town: Town, npc: NPC): number {
  return calcPercentage(npc.roll.professionLuck, (town.roll.wealth - 50) / 5)
}

export function npcGrossIncome (town: Town, npc: NPC): number {
  // TODO add hobbies
  // console.log(`Returning ${npc.name}'s gross income...`)
  const profession = findProfession(town, npc)
  return Math.round(calcPercentage(profession.dailyWage, (wageVariation(town, npc), (town.roll.wealth - 50) / 3)))
}

export function npcNetIncome (town: Town, npc: NPC): number {
  // console.log(`Returning ${npc.name}'s net income...`)
  return Math.round(calcPercentage(npcGrossIncome(town, npc), -npcTaxRate(town, npc)))
}

export function npcLifestyleStandard (town: Town, npc: NPC): LifestyleStandard {
  // console.log(`Returning ${npc.name}'s lifestyle standard...`)
  const income = npcNetIncome(town, npc)
  for (const lifestyleStandard of Object.values(lifestyleStandards)) {
    if (income >= lifestyleStandard.incomeThreshold) {
      return lifestyleStandard
    }
  }
  return lifestyleStandards.modest
}

export function npcLifestyleExpenses (town: Town, npc: NPC): number {
  // console.log(`Returning ${npc.name}'s lifestyle expenses...`)
  const income = npcGrossIncome(town, npc)
  return Math.round(income * (npcLifestyleStandard(town, npc).dailyWagePercentage / 100))
}

export function npcTotalLifestyleExpenses (town: Town, npc: NPC): number {
  return Math.round(npcLifestyleExpenses(town, npc) + npcLifestyleStandard(town, npc).incomeThreshold)
}

export function npcProfit (town: Town, npc: NPC): number {
  // console.log(`Returning ${npc.name}'s profit...`)
  return Math.round(npcNetIncome(town, npc) - npcTotalLifestyleExpenses(town, npc))
}

export function npcTaxRate (town: Town, npc: NPC): number {
  let totalTax = 0

  for (const tax of keys(town.taxes)) {
    if (tax === 'land') {
      totalTax += town.taxes[tax] * (socialClass[npc.socialClass].landRate || 1)
    } else if (typeof town.taxes[tax] === 'number') {
      totalTax += town.taxes[tax]
    } else {
      console.error(`non-integer tax! ${town.taxes[tax]}`)
    }
  }

  return Math.round(totalTax * 100) / 100
}
