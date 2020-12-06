import { ThresholdTable } from '../src/rollFromTable'
import { SocialClassName } from './_common'

export interface LifestyleStandard {
  dailyWagePercentage: number
    incomeThreshold: number
    lifestyleStandard: LifestyleStandardName
    lifestyleDescription: string
    homeBias: number,
    socialClass: {
      table: ThresholdTable<SocialClassName>
    }
}

export type LifestyleStandardName =
'aristocratic' |
'wealthy' |
'comfortable' |
'modest' |
'poor' |
'squalid' |
'wretched'

export const lifestyleStandards: Record<LifestyleStandardName, LifestyleStandard> = {
  aristocratic: {
    dailyWagePercentage: 40,
    incomeThreshold: 1000,
    lifestyleStandard: 'aristocratic',
    lifestyleDescription: 'lives large, with little care to how much money is spent, splashing out on expensive things on a whim',
    homeBias: 40,
    socialClass: {
      table: [
        [2, 'commoner'],
        [38, 'nobility'],
        [60, 'aristocracy']
      ]
    }
  },
  wealthy: {
    dailyWagePercentage: 35,
    incomeThreshold: 400,
    lifestyleStandard: 'wealthy',
    lifestyleDescription: 'lives lavishly, with fine foods, wines, clothes, and all the comforts money can buy',
    homeBias: 20,
    socialClass: {
      table: [
        [15, 'aristocracy'],
        [75, 'nobility'],
        [10, 'commoner']
      ]
    }
  },
  comfortable: {
    dailyWagePercentage: 30,
    incomeThreshold: 200,
    lifestyleStandard: 'comfortable',
    lifestyleDescription: 'lives a comfortable life, filled with good food and wine',
    homeBias: 10,
    socialClass: {
      table: [
        [5, 'nobility'],
        [40, 'nobility'],
        [50, 'commoner'],
        [5, 'peasantry']
      ]
    }
  },
  modest: {
    dailyWagePercentage: 25,
    incomeThreshold: 100,
    lifestyleStandard: 'modest',
    lifestyleDescription: 'lives modestly- not without creature comforts of wine and decent food thanks to frugality, though',
    homeBias: 0,
    socialClass: {
      table: [
        [5, 'nobility'],
        [40, 'commoner'],
        [50, 'peasantry'],
        [5, 'paupery']
      ]
    }
  },
  poor: {
    dailyWagePercentage: 10,
    incomeThreshold: 20,
    lifestyleStandard: 'poor',
    lifestyleDescription: 'lives a poor life, having to count copper and save for purchases',
    homeBias: -10,
    socialClass: {
      table: [
        [2, 'nobility'],
        [10, 'commoner'],
        [50, 'peasantry'],
        [38, 'paupery']
      ]
    }
  },
  squalid: {
    dailyWagePercentage: 5,
    incomeThreshold: 10,
    lifestyleStandard: 'squalid',
    lifestyleDescription: 'lives a squalid existence, eating terrible food with no alcohol, and few creature comforts',
    homeBias: -20,
    socialClass: {
      table: [
        [5, 'commoner'],
        [35, 'peasantry'],
        [60, 'paupery']
      ]
    }
  },
  wretched: {
    dailyWagePercentage: 3,
    incomeThreshold: 0,
    lifestyleStandard: 'wretched',
    lifestyleDescription: 'lives a wretched life of constant filth and misery. There is no respite to this poverty',
    homeBias: -40,
    socialClass: {
      table: [
        [35, 'peasantry'],
        [65, 'paupery']
      ]
    }
  }
}
