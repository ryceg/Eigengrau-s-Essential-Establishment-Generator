/**
 * Constrains every property of a record to be a certain type,
 * while still allowing for the keys to be unique values.
 *
 * @example
 * interface Person {
 *   name: string
 * }
 *
 * const people = constrainRecord<Person>()({
 *   dwight: { name: "Dwight" },
 *   angela: { name: "Angela" }
 * })
 *
 * people.dwight // Infers the type correctly.
 */
export function constrainRecord<T> () {
  return function constrainer<R extends Record<string, T>> (record: R) {
    return record as Record<keyof R, T>
  }
}

export function constrainArray<T> () {
  return function constrainer (array: T[]) {
    return array
  }
}
