import { logger } from '../logger'
import { Town } from '../town/_common'
import { Marriage, NPC } from './_common'
import { findProfession } from '../src/findProfession'
import { createTippyFull } from '../src/tippy'
import { capitalizeFirstLetter, assign } from '../src/utils'
import { wageVariation } from './npcFinances'
import { articles } from '../src/articles'
import { random } from '../src/random'
import { rollFromTable, ThresholdTable } from '../src/rollFromTable'
import { socialClass } from './socialClass'
import { lifestyleStandards } from './lifestyleStandards'

// this is not a threshold table; it is a probability table.
const homeTable: [number, string][] = [
  [0, 'on the streets'], // unreachable without biases
  [20, 'a rundown shack'],
  [10, 'no real permanent address'],
  [5, 'a village in the middle of the wilderness'],
  [5, 'an encampment'],
  [10, 'an apartment in a rundown neighborhood'],
  [15, 'a small house'],
  [5, 'a nice house'],
  [15, 'a large house'],
  [5, 'a very impressive house'],
  [20, 'a mansion'],
  [40, 'a palace'] // unreachable without biases
]

export function createLifestyleStandards (town: Town, npc: NPC) {
  logger.openGroup(`Creating living standards for ${npc.name}`)
  const isCurrently = random([
    'has been',
    'has recently been',
    'is',
    'is currently'
  ])
  const isHaving = random([
    'has been having',
    'has recently had',
    'is having',
    'is currently having'
  ])
  const desc = findProfession(town, npc)

  const tippy = createTippyFull(capitalizeFirstLetter(desc.description), npc.profession)

  const wageVarianceNotes: ThresholdTable = [
    [-25, `${isCurrently} impossibly unsuccessful as`],
    [-18, `${isCurrently} incredibly unsuccessful as`],
    [-12, `${isCurrently} unsuccessful as`],
    [-8, `${isCurrently} somewhat unsuccessful as`],
    [-5, `${isCurrently} slightly unsuccessful as`],
    [0, 'is'],
    [5, random([
        `${isCurrently} mildly successful as`,
        `${isHaving} mild success as`
    ])
    ],
    [8, random([
        `${isCurrently} reasonably successful as`,
        `${isHaving} reasonable success as`
    ])
    ],
    [8, random([
        `${isCurrently} modestly successful as`,
        `${isHaving} modest success as`
    ])
    ],
    [12, random([
        `${isCurrently} successful as`,
        `${isHaving} success as`
    ])
    ],
    [12, random([
        `${isCurrently} fabulously successful as`,
        `${isHaving} fabulous success as`
    ])
    ],
    [25, random([
        `${isCurrently} extremely successful as`,
        `${isHaving} extreme success as`
    ])
    ]
  ]
  let note = wageVarianceNotes.find(desc => {
    return desc[0] >= wageVariation(town, npc)
  })

  if (!note) note = [10, `${isHaving} modest success as`]

  npc.professionSuccess = `${npc.firstName} ${note[1] || wageVarianceNotes[5][1]} ${articles.find(npc.profession)} ${tippy}`
  logger.closeGroup()
}

export function createFamilyLifestyle (marriage: Marriage) {
  const lifestyle = rollFromTable(socialClass[marriage.socialClass || 'commoner'].lifestyleStandards, 100)
  const home = rollFromTable(homeTable, 100, lifestyleStandards[marriage.lifestyle || 'modest'].homeBias)

  assign(marriage, { lifestyle, home })
}
