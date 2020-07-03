/**
 * Returns the keys from `T` whose property types match the type `V`.
 */
export type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never
}[keyof T]
