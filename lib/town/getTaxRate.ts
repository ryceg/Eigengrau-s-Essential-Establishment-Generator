import { logger } from '../logger'
import { Town } from './_common'

export function getTaxRate (town: Town) {
  let totalTax = 0

  for (const tax of Object.values(town.taxes)) {
    if (typeof tax === 'number') {
      totalTax += tax
      continue
    }
    logger.error('Non-integer tax!', town.taxes[tax])
  }

  totalTax += calculateTax(2, town.roll.welfare)
  totalTax += calculateTax(2, town.roll.military)
  totalTax += calculateTax(3, town.roll.economics)

  return Math.round(totalTax * 100) / 100
}

function calculateTax (nominalTarget: number, economics: number) {
  return nominalTarget + (-1 / (economics + 0.1)) + (1 / (10 - economics))
}
