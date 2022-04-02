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
export function constrainRecord<AllowedType> () {
  // eslint-disable-next-line no-unused-vars
  return function constrainer<Key extends string> (record: { [P in Key]: AllowedType }) {
    return record
  }
}

export function constrainArray<AllowedType> () {
  return function constrainer (array: AllowedType[]) {
    return array
  }
}
