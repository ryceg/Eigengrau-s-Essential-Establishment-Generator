import { ThresholdTable } from './rollFromTable'

/**
 * A nice little default scaffold to work off of.
 * @param roll A roll bounded between 1 - 100
 * @returns The modifier, which is intended to be consumed either as a fairmath, or taken straight.
 */
export function defaultRollModifier (roll: number, customTable?: [number, number][]): number {
  const modifierTable: ThresholdTable<number> = [
    [95, 35],
    [90, 20],
    [80, 15],
    [70, 10],
    [60, 5],
    [55, 3],
    [50, 1],
    [45, -1],
    [40, -2],
    [30, -5],
    [20, -10],
    [10, -15],
    [0, -20]
  ]
  for (const [rollValue, modifier] of customTable || modifierTable) {
    if (roll >= rollValue) {
      return modifier
    }
  }
  throw new Error('Roll was out of bounds!')
}
