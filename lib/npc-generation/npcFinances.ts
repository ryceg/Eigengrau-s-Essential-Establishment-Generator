import { NPC } from './_common'
import { calcPercentage } from '../src/calcPercentage'
import { Town } from '../town/_common'
import { getTaxRate } from '../town/getTaxRate'
import { findProfession } from '../src/findProfession'
import { LifestyleStandard, lifestyleStandards } from './lifestyleStandards'

/** `town.roll.wealth` increases or decreases npc.professionLuck by up to 10%, reflecting the strength of the economy. The expected range is between -25 and 25. */
export function wageVariation (town: Town, npc: NPC): number {
  return calcPercentage(npc.roll.professionLuck, (town.roll.wealth - 50) / 5)
}

export function npcGrossIncome (town: Town, npc: NPC): number {
  // TODO add hobbies
  // logger.info(`Returning ${npc.name}'s gross income...`)
  const profession = findProfession(town, npc)
  return Math.round(calcPercentage(profession.dailyWage, (wageVariation(town, npc), (town.roll.wealth - 50) / 3)))
}

export function npcNetIncome (town: Town, npc: NPC): number {
  // logger.info(`Returning ${npc.name}'s net income...`)
  return Math.round(calcPercentage(npcGrossIncome(town, npc), -npcTaxRate(town)))
}

export function npcLifestyleStandard (town: Town, npc: NPC): LifestyleStandard {
  // logger.info(`Returning ${npc.name}'s lifestyle standard...`)
  const income = npcNetIncome(town, npc)
  for (const lifestyleStandard of Object.values(lifestyleStandards)) {
    if (income >= lifestyleStandard.incomeThreshold) {
      return lifestyleStandard
    }
  }
  return lifestyleStandards.modest
}

export function npcLifestyleExpenses (town: Town, npc: NPC): number {
  // logger.info(`Returning ${npc.name}'s lifestyle expenses...`)
  const income = npcGrossIncome(town, npc)
  return Math.round(income * (npcLifestyleStandard(town, npc).dailyWagePercentage / 100))
}

export function npcTotalLifestyleExpenses (town: Town, npc: NPC): number {
  return Math.round(npcLifestyleExpenses(town, npc) + npcLifestyleStandard(town, npc).incomeThreshold)
}

export function npcProfit (town: Town, npc: NPC): number {
  // logger.info(`Returning ${npc.name}'s profit...`)
  return Math.round(npcNetIncome(town, npc) - npcTotalLifestyleExpenses(town, npc))
}

export function npcTaxRate (town: Town): number {
  return getTaxRate(town)
}
