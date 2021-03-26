import { getPriceMod } from './getPriceMod'

// uses settings.silverStandard, setup.getPriceMod
export const money = (copper: number, priceMod: number) => {
  if (priceMod) copper = Math.round(copper * getPriceMod(priceMod))
  let silver
  let gold
  let isNegative = false
  if (copper < 0) { isNegative = true }
  copper = Math.abs(copper)
  const conversionRates = {
    default: {
      copperToGold: 100,
      silverToGold: 10
    },
    silverStandard: {
      copperToGold: 10000,
      silverToGold: 100
    }
  }
  let conversions
  if (settings.silverStandard) {
    conversions = conversionRates.silverStandard
  } else {
    conversions = conversionRates.default
  }

  if (copper >= conversions.copperToGold) {
    gold = Math.trunc(copper / conversions.copperToGold)
    copper %= conversions.copperToGold
  } else {
    gold = 0
  }
  if (copper >= conversions.silverToGold) {
    silver = Math.trunc(copper / conversions.silverToGold)
    copper %= conversions.silverToGold
  } else {
    silver = 0
  }

  let output = ''
  if (isNegative) output += '-'
  if (gold > 0) output = `${output}${gold} Gold`
  if (silver > 0) output = `${output} ${silver} Silver`
  if (copper > 0) output = `${output} ${copper} Copper`
  return output
}
