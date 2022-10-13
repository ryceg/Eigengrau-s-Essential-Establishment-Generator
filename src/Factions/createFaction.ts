/* eslint-disable @typescript-eslint/ban-ts-comment */
import { clampRolls, Faction, FactionType, Town } from '@lib'

// uses setup.leaderFaction
export const createFaction = (town: Town, opts?: Partial<Faction>): Faction => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const type = opts?.type || lib.weightedRandomFetcher(town, lib.factionData.types, null, null, 'object').type as FactionType

  // s are defined immediately in case they're needed in the subroutines out of order (i.e. it makes no sense to initialise Size in the size.js function if it's being used in "reputation.js")

  const faction = Object.assign({
    key: lib.getUUID(),
    passageName: 'FactionProfile',
    initPassage: 'FactionSliders',
    objectType: 'faction',
    localImage: `${type}-illustration`,
    type,
    isPolicing: false,
    wordNoun: lib.factionData.types[type].wordNoun,
    motivation: lib.weightRandom(lib.factionData.types[type].motivation),
    membersTrait: lib.weightRandom(lib.factionData.types[type].membersTrait),
    leadershipType: lib.weightRandom(lib.factionData.types[type].leader.format),
    resources: {

    },
    roll: {
      influence: lib.dice(2, 50),
      reputation: lib.dice(2, 50),
      age: lib.dice(2, 50),
      size: lib.dice(2, 50),
      stability: lib.dice(2, 50),
      resources: lib.dice(2, 50),
      joiningFee: lib.dice(2, 50),
      leaderCompetence: lib.dice(2, 50),
      leaderBribes: lib.dice(2, 50)
    }
  }, opts)

  clampRolls(faction.roll)

  if (typeof faction.type === 'undefined') {
    lib.logger.warn('Faction type was somehow missed. Rerolling...')
    lib.logger.info(faction)
    // @ts-ignore
    const type2 = lib.weightedRandomFetcher(town, lib.factionData.types, null, null, 'object').type
    if (!type2) {
      lib.logger.error('Faction type was not defined! Defaulting to merchants.')
      faction.type = 'merchants'
    } else {
      faction.type = type2
    }
  }

  lib.assign(faction, {
    livery: lib.createLivery(faction.type)
  })

  lib.setFactionAge(faction as Faction)
  faction.name = faction.name || lib.setFactionName(town, faction as Faction)

  lib.logger.openGroup(`${faction.name} the ${faction.type} are loading.`)

  lib.setFactionReputation(faction as Faction)
  lib.setFactionSize(town, faction as Faction)
  lib.setFactionInfluence(faction as Faction)
  lib.setFactionResources(faction as Faction)
  lib.setFactionStability(faction as Faction)
  setup.leaderFaction(town, faction as Faction)
  lib.setFactionJoinStats(faction as Faction)
  lib.setFactionMisc(faction as Faction)

  lib.createAllies(faction as Faction)
  lib.createRivals(faction as Faction)

  faction.tippyDescription = `${lib.articles.output(faction.size as string).toUpperFirst()} ${faction.type} ${faction.wordNoun} called ${faction.name}`

  lib.logger.closeGroup()
  lib.logger.info(faction)
  return faction as Faction
}
