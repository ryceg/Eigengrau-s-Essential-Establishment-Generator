setup.npcTaxRate = function (town, npc) {
  let totalTax = 0
  Object.keys(town.taxes).forEach(function (tax) {
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
  })
  return Math.round(totalTax * 100) / 100
}
