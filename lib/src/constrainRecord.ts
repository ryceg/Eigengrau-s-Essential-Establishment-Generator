
/**
 * Constrains every property of a record to be a certain type,
 * while still allowing for the keys to be unique values.
 */
export function constrainRecord<T> () {
  return function constrainer<R extends Record<string, T>> (record: R) {
    return record as Record<keyof R, T>
  }
}
