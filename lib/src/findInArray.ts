/**
* For returning an object from an array by key value
* i.e. town.buildings keys.
* find building find array
*/
export function findInArray<T, K extends keyof T> (array: T[], key: K, value: T[K]) {
  for (const element of array) {
    if (element[key] === value) {
      return element
    }
  }
}
