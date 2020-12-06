import { random } from '../src/random'
import { closestMatch } from '../src/closestMatch'
import { ThresholdTable } from '../src/rollFromTable'

import { bmiDescriptions } from './bmiDescriptions'
import { raceTraits } from './raceTraits'
import { NPC } from './_common'

export function setRace (npc: NPC) {
  const raceData = raceTraits[npc.race]
  const genderTraits = raceData.genderTraits[npc.gender]

  if (random(1, 100) >= genderTraits.beardProbability) {
    npc.beard = random(raceData.beard)
  }

  npc.heightInches = genderTraits.baseHeight + genderTraits.heightModifier()
  npc.weightRoll = genderTraits.baseWeight + (genderTraits.heightModifier() * genderTraits.weightModifier())
  npc.bmi = Math.trunc((npc.weightRoll / (npc.heightInches * npc.heightInches)) * raceData.bmiModifier)
  npc.weight = npc.weight || closestMatch(bmiDescriptions, 'weight', 'bmi', 'muscleMass', npc.bmi, npc.muscleMass)

  for (const [height, description] of heightChart) {
    if (height >= npc.heightInches) {
      npc.height = description
    }
  }
}

const heightChart: ThresholdTable = [
  [78, 'giraffe-like'],
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
  [42, 'tall (for a halfling)'],
  [40, 'barely a metre'],
  [38, 'diminutive'],
  [36, 'quite diminutive'],
  [34, 'adorably short'],
  [32, 'tiny'],
  [30, 'so so tiny'],
  [0, 'impossibly small']
]
