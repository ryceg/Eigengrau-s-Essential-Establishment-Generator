/* eslint-disable @typescript-eslint/ban-ts-comment */
import { random } from '../src/random'
import { closestMatch } from '../src/closestMatch'
import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { GenderName } from '../npc-generation/genderData'

import { bmiDescriptions } from './bmiDescriptions'
import { GenderTraits, RaceName, raceTraits } from './raceTraits'
import { NPC } from './_common'

interface GetGenderTraitProps {
  race: RaceName
  gender: GenderName
}

export function getGenderTrait <K extends keyof GenderTraits> (props: GetGenderTraitProps, key: K) {
  const { genderTraits } = raceTraits[props.race]
  const trait = (genderTraits[props.gender] || genderTraits.woman)[key]

  if (typeof trait === 'undefined') {
    throw new Error('Could not find fallback trait.')
  }

  return trait as GenderTraits[K]
}

export function setRace (npc: NPC) {
  const raceData = raceTraits[npc.race]
  const beardProbability = getGenderTrait(npc, 'beardProbability')
  const baseHeight = getGenderTrait(npc, 'baseHeight')
  const baseWeight = getGenderTrait(npc, 'baseWeight')
  const heightModifier = getGenderTrait(npc, 'heightModifier')()
  const weightModifier = getGenderTrait(npc, 'weightModifier')()

  if (random(1, 100) <= beardProbability) {
    npc.beard = random(raceData.beard)
  }

  npc.heightInches = baseHeight + heightModifier
  npc.weightPounds = baseWeight + (heightModifier * weightModifier)
}

export const getNPCBMI = (weightPounds: number, heightInches: number, bmiModifier = 703) => {
  return Math.trunc((weightPounds / (heightInches * heightInches)) * bmiModifier)
}

export const getNPCWeight = (bmi: number, muscleMass: number) => {
  return closestMatch(bmiDescriptions, 'weight', 'bmi', 'muscleMass', bmi, muscleMass)
}

export const getNPCHeight = (heightInches: number) => {
  const heightChart: ThresholdTable = [
    [84, 'giraffe-like'],
    [78, 'towering'],
    [77, 'extremely tall'],
    [76, 'very tall'],
    [75, 'rather tall'],
    [74, 'quite tall'],
    [73, 'reasonably tall'],
    [72, 'tall'],
    [71, 'taller than average'],
    [70, 'average sized'],
    [69, 'medium sized'],
    [68, 'on the short side'],
    [67, 'somewhat short'],
    [66, 'relatively short'],
    [65, 'short-ish'],
    [64, 'short'],
    [63, 'short'],
    [62, 'rather short'],
    [61, 'barely five foot'],
    [60, 'quite short'],
    [59, 'rather small'],
    [58, 'really short'],
    [57, 'pint sized'],
    [56, 'quite small'],
    [55, 'small'],
    [54, 'squat'],
    [53, 'somewhat squat'],
    [52, 'quite squat'],
    [50, 'rather squat'],
    [48, 'somewhat tiny'],
    [46, 'rather small'],
    [44, 'rather tall (compared to a halfling)'],
    [42, 'tall (compared to a halfling)'],
    [40, 'barely a metre'],
    [38, 'diminutive'],
    [36, 'quite diminutive'],
    [34, 'adorably short'],
    [32, 'tiny'],
    [30, 'so so tiny'],
    [0, 'impossibly small']
  ]

  return getRolledFromTable(heightChart, heightInches) || 'average'
}
