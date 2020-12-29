/**
 * @param {import("../../lib/town/_common").Town} town
 */
setup.initialisePoisonedPotioner = (town, adventure) => {
  if (!adventure) adventure = {}
  adventure.merchant = adventure.merchant || setup.createNPC(town, { gender: 'man', profession: 'merchant' })
  adventure.madame = adventure.madame || setup.createNPC(town, { gender: 'woman', lastName: 'Beaudry', race: 'human', title: 'Madame', profession: 'apothecarist', background: 'noble', age: 'middle aged', canBeCustom: false })
  adventure.murderer = adventure.murderer || setup.createNPC(town, { gender: 'man', profession: 'apothecarist' })
  adventure.alchemist = adventure.alchemist || setup.createNPC(town, { gender: 'man', profession: 'alchemist' })
  adventure.tavern = adventure.tavern || lib.findInArray(town.buildings, 'buildingType', 'tavern') || setup.createNewBuilding(town, 'Tavern')
  adventure.herbs = adventure.herbs || lib.createAlchemy({ type: 'preserved herb' })
  return adventure
}
