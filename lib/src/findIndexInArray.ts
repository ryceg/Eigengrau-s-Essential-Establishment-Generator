export function findIndexInArray<T, K extends keyof T> (array: T[], key: K, value: T[K]) {
  for (const [index, element] of array.entries()) {
    if (element[key] === value) {
      console.log(`Found matching key value of ${key}: ${value}!`)
      console.log(element, index)
      return index
    }
  }

  throw new Error(`Could not find object matching the key/value of: "${key}"/"${value}"!`)
}
