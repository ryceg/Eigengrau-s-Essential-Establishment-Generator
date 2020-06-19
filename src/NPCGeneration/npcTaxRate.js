setup.npcTaxRate = (town, npc) => {
  let totalTax = 0

  for (const tax of Object.keys(town.taxes)) {
    if (tax === 'land') {
      totalTax += town.taxes[tax] * (setup.socialClass[npc.socialClass].landRate || 1)
    } else if (typeof town.taxes[tax] === 'number') {
      totalTax += town.taxes[tax]
    } else if (typeof town.taxes[tax] === 'function') {
      const temp = town.taxes[tax](town, npc)
      totalTax += temp
    } else {
      console.log(`non-integer tax! ${town.taxes[tax]}`)
    }
  }

  return Math.round(totalTax * 100) / 100
}
