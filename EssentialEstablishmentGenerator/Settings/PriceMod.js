setup.getPriceMod = function () {
  if (tags().length === 0) {
    return 0
  }

  var locations = ['blacksmith', 'tavern', 'alchemist', 'GeneralStore']
  var loc = tags().find(function (tag) {
    return locations.includes(tag)
  })

  if (!loc) {
    return 0
  }

  var V = State.variables

  return Number(V[loc].priceModifier + 'e-2')
      || 0
}
