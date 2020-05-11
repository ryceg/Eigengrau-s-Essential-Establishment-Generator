/* eslint-disable no-undef */
setup.getPriceMod = function () {
  if (tags().length === 0) {
    return 1
  }

  const locations = ['blacksmith', 'tavern', 'alchemist', 'generalStore', 'docks', 'smithy']
  const loc = tags().find(function (tag) {
    return locations.includes(tag)
  })

  if (!loc) {
    return 1
  }

  const V = State.variables

  return Number(V[loc].priceModifier + 'e-2') || 1
}
