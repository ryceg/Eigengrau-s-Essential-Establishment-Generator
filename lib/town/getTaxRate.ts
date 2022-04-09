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
  return Math.round(totalTax * 100) / 100
}
