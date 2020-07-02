export function findIndexInArray<T, K extends keyof T> (array: T[], key: K, value: T[K]) {
  const obj = array.find(element => {
    if (element[key] === value) {
      console.log(`Found matching key value of ${key}: ${value}!`)
      console.log(element)
      console.log(array.indexOf(element))
      return array.indexOf(element)
    }
  })
  if (obj === undefined) throw new Error(`Could not find an object in the array with the matching key value of ${key}: ${value}!`)
  return array.indexOf(obj)
}
