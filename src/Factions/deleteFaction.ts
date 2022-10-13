import type { Town } from '@lib'

// uses setup.deleteNPC
export const deleteFaction = (town: Town, key: string) => {
  lib.logger.info('Trying to delete faction:', key)
  const leader = town.factions[key].leader

  if (leader) {
    setup.deleteNPC(leader.key)
  }

  if (key in town.factions) {
    const deleted = town.factions[key]
    lib.logger.info(`Deleting faction ${deleted.name}...`)
    delete town.factions[key]
    return deleted
  }
}
