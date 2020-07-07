import { keys } from './utils'

/**
 * Maps a dictionary of string/number pairs into an array of tuples.
 *
 * @example
 * { human: 16.12, dragonborn: 0.3, dwarf: 6.1249 }
 * // converts into
 * [['dragonborn', 0.3], ['dwarf', 6.1249], ['human', 16.12]]
 */
export function sortArray <K extends string> (container: Record<K, number>) {
  const sortable = keys(container).map(key => {
    return [key, container[key]] as const
  })

  return sortable.sort((a, b) => a[1] - b[1])
}
