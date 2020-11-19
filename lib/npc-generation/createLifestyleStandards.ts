import { Town } from '../town/_common'
import { NPC } from './_common'
import { findProfession } from '../src/findProfession'
import { createTippyFull } from '../src/tippy'
import { capitalizeFirstLetter, assign } from '../src/utils'
import { wageVariation } from './npcFinances'
import { articles } from '../src/articles'
import { rollFromTable, ThresholdTable } from '../src/rollFromTable'
import { socialClass } from './socialClass'
import { lifestyleStandards } from './lifestyleStandards'

const homeTable = [
  [0, 'on the streets'], // unreachable without biases
  [20, 'a rundown shack'],
  [10, 'no real permanent address'],
  [5, 'a village in the middle of the wilderness'],
  [5, 'an encampment'],
  [10, 'an apartment in a rundown neighborhood'],
  [20, 'a small house'],
  [20, 'a large house'],
  [20, 'a mansion'],
  [40, 'a palace'] // unreachable without biases
] as ThresholdTable

export function createLifestyleStandards (town: Town, npc: NPC) {
  console.groupCollapsed(`Creating living standards for ${npc.name}`)
  const isCurrently = [
    'has been',
    'has recently been',
    'is',
    'is currently'
  ].random()
  const isHaving = [
    'has been having',
    'has recently had',
    'is having',
    'is currently having'
  ].random()
  const desc = findProfession(town, npc)

  const tippy = createTippyFull(capitalizeFirstLetter(desc.description), npc.profession)

  const wageVarianceNotes = [
    [-25, `${isCurrently} impossibly unsuccessful as`],
    [-18, `${isCurrently} incredibly unsuccessful as`],
    [-12, `${isCurrently} unsuccessful as`],
    [-8, `${isCurrently} somewhat unsuccessful as`],
    [-5, `${isCurrently} slightly unsuccessful as`],
    [0, 'is'],
    [5, [
      `${isCurrently} mildly successful as`,
      `${isHaving} mild success as`
    ].random()],
    [8, [
      `${isCurrently} reasonably successful as`,
      `${isHaving} reasonable success as`
    ].random()],
    [8, [
      `${isCurrently} modestly successful as`,
      `${isHaving} modest success as`
    ].random()],
    [12, [
      `${isCurrently} successful as`,
      `${isHaving} success as`
    ].random()],
    [12, [
      `${isCurrently} fabulously successful as`,
      `${isHaving} fabulous success as`
    ].random()],
    [25, [
      `${isCurrently} extremely successful as`,
      `${isHaving} extreme success as`
    ].random()]
  ] as ThresholdTable
  let note = wageVarianceNotes.find(desc => {
    return desc[0] >= wageVariation(town, npc)
  })

  if (!note) note = [10, `${isHaving} modest success as`]

  npc.professionSuccess = `${npc.firstName} ${note[1] || wageVarianceNotes[5][1]} ${articles.find(npc.profession)} ${tippy}`
  console.groupEnd()
}

export function createFamilyLifestyle (marriage: Marriage) {
  const lifestyle = rollFromTable(socialClass[marriage.socialClass || 'commoner'].lifestyleStandards, 100)
  const home = rollFromTable(homeTable, 100, lifestyleStandards[marriage.lifestyle || 'modest'].homeBias)

  assign(marriage, { lifestyle, home })
}
