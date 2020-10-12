setup.createFaction = (town, opts = {}) => {
  // const type = ['thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars'].random()
  const type = opts.type || Object.keys(lib.factionData).random()
  // s are defined immediately in case they're needed in the subroutines out of order (i.e. it makes no sense to initialise Size in the size.js function if it's being used in "reputation.js")

  const faction = Object.assign({
    key: lib.getUUID(),
    passageName: 'FactionProfile',
    objectType: 'faction',
    type,
    isPolicing: false,
    wordNoun: lib.factionData[type].wordNoun,
    motivation: lib.weightRandom(lib.factionData[type].motivation),
    membersTrait: lib.weightRandom(lib.factionData[type].membersTrait),
    leadershipType: lib.weightRandom(lib.factionData[type].leader.format),
    roll: {
      influence: lib.dice(2, 50),
      reputation: lib.dice(2, 50),
      age: lib.dice(2, 50),
      size: lib.dice(2, 50),
      stability: lib.dice(2, 50),
      resources: lib.dice(2, 50)
    }
  }, opts)

  if (typeof faction.type === 'undefined') {
    console.error('faction type was not defined! Defaulting to merchants.')
    console.log(faction)
    faction.type = 'merchants'
  }

  if (lib.factionData[faction.type].livery) lib.createLivery(faction)

  lib.setFactionAge(faction)
  lib.setFactionName(town, faction)

  console.groupCollapsed(`${faction.name} the ${faction.type} are loading.`)

  lib.setFactionReputation(faction)
  lib.setFactionSize(town, faction)
  lib.setFactionInfluence(faction)
  lib.setFactionResources(faction)
  lib.setFactionStability(faction)
  setup.leaderFaction(town, faction)
  lib.setFactionJoinStats(faction)
  lib.setFactionMisc(faction)

  lib.createAllies(faction)
  lib.createRivals(faction)

  faction.tippyDescription = `${lib.articles.output(faction.size).toUpperFirst()} ${faction.type} ${faction.wordNoun} called ${faction.name}`

  console.groupEnd()
  console.log(`${faction.name} have loaded.`)
  console.log(faction)
  return faction
}
