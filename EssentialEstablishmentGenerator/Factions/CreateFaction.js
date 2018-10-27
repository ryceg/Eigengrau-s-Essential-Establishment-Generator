setup.createFaction = function (town, opts) {
  opts = opts || {}
  var type = ['thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars'].random()
  // Rolls are defined immediately in case they're needed in the subroutines out of order (i.e. it makes no sense to initialise SizeRoll in the size.js function if it's being used in "reputation.js")

  var faction = (opts['newFaction'] || Object.assign({
    index: State.variables.factions.size,
    associatedTown: town,
    type: type,
    factionNoun: setup.factionData.type[type].factionNoun,
    motivation: setup.factionData.type[type].motivation.random(),
    membersTrait: setup.factionData.type[type].membersTrait.random(),
    name: setup.nameFaction(town.name, type),
    leadershipType: ['individual', 'individual', 'individual', 'group', 'group'].random(),
    influenceRoll: dice(2, 50).clamp(1, 100),
    reputationRoll: dice(2, 50).clamp(1, 100),
    ageRoll: dice(2, 50).clamp(1, 100),
    sizeRoll: dice(2, 50).clamp(1, 100),
    stabilityRoll: dice(2, 50).clamp(1, 100),
    resourcesRoll: dice(2, 50).clamp(1, 100)
  }, opts))
  console.groupCollapsed(faction.name + ' the ' + faction.type + ' have loaded.')

  console.log('ageing...')
  setup.ageFaction(faction)
  console.log('assigning a reputation...')
  setup.reputationFaction(faction)
  console.log('giving it a size...')
  setup.sizeFaction(town, faction)
  console.log('assigning influence...')
  setup.influenceFaction(faction)
  console.log('assigning resources...')
  setup.resourcesFaction(faction)
  console.log('determining stability...')
  setup.stabilityFaction(faction)
  console.log('determining leaders...')
  setup.leaderFaction(town, faction)
  console.log('determining joining...')
  setup.joinFaction(faction)
  console.log('finding allies...')
  setup.createAllies(faction)
  console.log('accruing enemies...')
  setup.createRivals(faction)
  console.log('other cool bits...')
  setup.createMisc(faction)

  if (faction.isThrowaway === undefined) {
    console.log('and finally assigning to the faction roster.')
    State.variables.factions.push(faction)
  } else {
    console.log('and assigning as disposable. Bye bye, ' + faction.name + '!')
  }
  console.groupEnd()
  return faction
}
