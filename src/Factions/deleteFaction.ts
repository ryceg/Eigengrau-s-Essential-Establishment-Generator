import type { Town } from '@lib'

// uses setup.deleteNPC
export const deleteFaction = (town: Town, key: string) => {
  console.log(town, key)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (town.factions[key].leader) setup.deleteNPC(town.factions[key].leader.key)
  if (key in town.factions) {
    const deleted = town.factions[key]
    console.log(`Deleting faction ${deleted.name}...`)
    delete town.factions[key]
    return deleted
  }
}
