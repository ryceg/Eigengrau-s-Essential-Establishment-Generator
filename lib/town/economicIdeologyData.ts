import { PartialRecord } from '../types'
import { EconomicIdeology } from './townData'
import { Town, TownRolls } from './_common'

export const economicIdeologyData: {
  [key in EconomicIdeology]: {
    modifiers: PartialRecord<TownRolls, number>
    descriptors: {
      economicIdeologyIC: string
      economicIdeologyIST: string
      economicIdeologyDescription: (town: Town) => string
      tippy: string
    }
  }
} = {
  feudalism: {
    modifiers: {
      economics: 15,
      welfare: -25,
      law: 15,
      military: 20
    },
    descriptors: {
      economicIdeologyIC: 'feudalistic',
      economicIdeologyIST: 'feudalist',
      economicIdeologyDescription: (town: Town) => `The people of ${town.name} work the land in exchange for working their lord's lands.`,
      tippy: "The crown gives land to the nobles in exchange for military service. Peasants work, tithe, and fight for the nobles in exchange for being able to live on the noble's lands."
    }
  },
  capitalism: {
    modifiers: {
      economics: -20,
      welfare: -25,
      law: 15,
      military: 20
    },
    descriptors: {
      economicIdeologyIC: 'capitalistic',
      economicIdeologyIST: 'capitalist',
      economicIdeologyDescription: (town: Town) => `The people of ${town.name} work in exchange for payment from their employers, which they use to buy the necessities.`,
      tippy: 'Trade and industry are controlled by private owners for profit, rather than the state.'
    }
  },
  syndicalism: {
    modifiers: {
      economics: 35,
      welfare: 25,
      law: -15,
      military: -15,
      equality: 25
    },
    descriptors: {
      economicIdeologyIC: 'syndicalistic',
      economicIdeologyIST: 'syndicalist',
      economicIdeologyDescription: (town: Town) => `The people of ${town.name} own the lands they work on collectively, and together benefit from its prosperity.`,
      tippy: 'The workers own the lands they work on collectively, and together benefit from its prosperity.'
    }
  },
  communism: {
    modifiers: {
      economics: 40,
      welfare: 30,
      law: -15,
      military: -30,
      equality: 25
    },
    descriptors: {
      economicIdeologyIC: 'communistic',
      economicIdeologyIST: 'communist',
      economicIdeologyDescription: (town: Town) => `The people of ${town.name} work the jobs that they are able to, and are paid according to their needs. Excess profits are reinvested to strengthen the society as a whole.`,
      tippy: 'People work the jobs that they are able to, and are paid according to their needs. Excess profits are reinvested to strengthen the society as a whole.'
    }
  },
  primitivism: {
    modifiers: {
      economics: 40,
      welfare: -25,
      law: -30,
      military: -30,
      equality: -25
    },
    descriptors: {
      economicIdeologyIC: 'primitivistic',
      economicIdeologyIST: 'primitivist',
      economicIdeologyDescription: (town: Town) => `The people of ${town.name} work the land in a loosely organised sense; there is no concept of ownership, and the majority of the $town.type's citizens are hunter-gatherers.`,
      tippy: 'There is no formal government, and people are largely hunter-gatherers with no concept of ownership; might makes right.'
    }
  }
}
