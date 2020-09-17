setup.money = (copper, priceMod) => {
  if (priceMod) copper = Math.round(copper * setup.getPriceMod(priceMod))
  let silver
  let gold
  switch (settings.silverStandard) {
    case true:
      if (copper >= 10000) {
        gold = Math.trunc(copper / 10000)
        copper %= 10000
      } else {
        gold = 0
      }

      if (copper >= 100) {
        silver = Math.trunc(copper / 100)
        copper %= 100
      } else {
        silver = 0
      }
      break
    default:
      if (copper >= 100) {
        gold = Math.trunc(copper / 100)
        copper %= 100
      } else {
        gold = 0
      }
      if (copper >= 10) {
        silver = Math.trunc(copper / 10)
        copper %= 10
      } else {
        silver = 0
      }
  }

  let output = ''
  if (gold > 0) output = `${output} ${gold} Gold`
  if (silver > 0) output = `${output} ${silver} Silver`
  if (copper > 0) output = `${output} ${copper} Copper`
  return output
}
