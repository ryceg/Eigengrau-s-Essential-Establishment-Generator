/**
 * Returns the keys from `T` whose property types match the type `V`.
 */
export type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never
}[keyof T]

/**
 * Each value represents the weight of its key
 */
export type WeightRecord<T extends string> = { [P in T]?: number }

export type PartialRecord<T extends string | number, V> = Partial<Record<T, V>>

// eslint-disable-next-line @typescript-eslint/ban-types
type ReadonlyPrimitive = undefined | null | boolean | string | number | Function;

export type DeepReadonly<T> =
    T extends ReadonlyPrimitive ? T :
    T extends Array<infer U> ? ReadonlyArray<DeepReadonly<U>> :
    T extends Map<infer K, infer V> ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>> :
    T extends Set<infer M> ? ReadonlySet<DeepReadonly<M>> : Readonly<T>;
