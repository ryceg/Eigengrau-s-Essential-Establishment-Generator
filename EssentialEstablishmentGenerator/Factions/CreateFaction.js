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
    name: setup.nameFaction(town.name, type),
    leadershipType: ['individual', 'individual', 'individual', 'group', 'group'].random(),
    influenceRoll: dice(2, 50).clamp(1, 100),
    reputationRoll: dice(2, 50).clamp(1, 100),
    ageRoll: dice(2, 50).clamp(1, 100),
    sizeRoll: dice(2, 50).clamp(1, 100),
    stabilityRoll: dice(2, 50).clamp(1, 100),
    resourcesRoll: dice(2, 50).clamp(1, 100)
  }, opts))

  setup.ageFaction(faction)
  setup.reputationFaction(faction)
  setup.sizeFaction(town, faction)
  setup.influenceFaction(faction)
  setup.resourcesFaction(faction)
  setup.stabilityFaction(faction)
  console.log(faction.name + ' the ' + faction.type + ' have loaded.')
  setup.leaderFaction(town, faction)
  setup.joinFaction(faction)
  // setup.membersFaction(faction)
  faction.membersTrait = setup.factionData.type[faction.type].membersTrait.random()
  setup.createAllies(faction)
  setup.createRivals(faction)
  setup.createMisc(faction)

  if (faction.isThrowaway === undefined) {
    State.variables.factions.set(++faction.index, faction)
  }

  return faction
}
