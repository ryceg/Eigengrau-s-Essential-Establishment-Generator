setup.createFaction = function (town, opts) {
  opts = opts || {}
  const type = ['thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars'].seededrandom()
  // s are defined immediately in case they're needed in the subroutines out of order (i.e. it makes no sense to initialise Size in the size.js function if it's being used in "reputation.js")

  const faction = (opts['newFaction'] || Object.assign({
    id: [State.variables.factions.length - 1],
    key: randomFloat(1).toString(16),
    passageName: 'FactionProfile',
    associatedTown: town.name,
    type,
    wordNoun: setup.factionData.type[type].wordNoun,
    motivation: setup.factionData.type[type].motivation.seededrandom(),
    membersTrait: setup.factionData.type[type].membersTrait.seededrandom(),
    leadershipType: ['individual', 'individual', 'individual', 'group', 'group'].seededrandom(),
    roll: {
      influence: dice(2, 50),
      reputation: dice(2, 50),
      age: dice(2, 50),
      size: dice(2, 50),
      stability: dice(2, 50),
      resources: dice(2, 50)
    }
  }, opts))
  faction.name = setup.nameFaction(town.name, faction.type)
  console.groupCollapsed(faction.name + ' the ' + faction.type + ' have loaded.')

  setup.ageFaction(faction)

  setup.reputationFaction(faction)

  setup.sizeFaction(town, faction)

  setup.influenceFaction(faction)

  setup.resourcesFaction(faction)

  setup.stabilityFaction(faction)

  setup.leaderFaction(town, faction)

  setup.joinFaction(faction)

  setup.createAllies(faction)

  setup.createRivals(faction)
  console.log('other cool bits...')
  setup.createMisc(faction)

  faction.tippyDescription = 'A ' + faction.size + ' ' + faction.type + ' ' + faction.wordNoun + ' called ' + faction.name

  // if (faction.isThrowaway === undefined) {
  //   console.log('and finally assigning to the faction roster.')
  //   State.variables.factions.push(faction.id)
  // } else {
  //   console.log('and assigning as disposable. Bye bye, ' + faction.name + '!')
  // }
  console.groupEnd()
  return faction
}
