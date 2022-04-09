import { Town, TownBasics, townData } from '@lib'

export const createTownName = function (town: TownBasics | Town) {
  const prefix = townData.name.prefix
  const suffix = townData.name.suffix
  let name: string
  if (lib.random(100) > 90) {
    lib.logger.info('Named a founder!')
    if (town) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const npc = lib.createNamesake(town, { note: 'The namesake of the town.' })

      name = lib.random([npc.firstName, npc.lastName]) + lib.random(suffix)
    } else {
      name = lib.random(lib.raceTraits.human.lastName) + lib.random(suffix)
    }
  } else {
    name = lib.random(prefix) + lib.random(suffix)
  }

  // linguisticDrift runs some RegEx on the names.
  const driftName = lib.linguisticDrift(name)

  // casting as Town because replaceTownName tests for Town properties.
  lib.replaceTownName(town as Town, driftName)

  return driftName
}
