/**
 * Returns the keys from `T` whose property types match the type `V`.
 */
export type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never
}[keyof T]

/**
 * Each value represents the weight of its key
 */
export type WeightRecord<T extends string> = Record<T, number>
