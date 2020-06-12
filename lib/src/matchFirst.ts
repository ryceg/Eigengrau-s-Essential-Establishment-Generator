import { keys } from './utils'

export const matchFirst = {
  equalTo: createMatchFirst((value, key) => {
    return value === key
  }),
  notEqualTo: createMatchFirst((value, key) => {
    return value !== key
  }),
  largerThan: createMatchFirst((value, key) => {
    return value > key
  }),
  largerThanOrEqualTo: createMatchFirst((value, key) => {
    return value >= key
  }),
  smallerThan: createMatchFirst((value, key) => {
    return value < key
  }),
  smallerThanOrEqualTo: createMatchFirst((value, key) => {
    return value <= key
  })
}

function createMatchFirst (callback: (value: number, key: number) => boolean) {
  const modifier = <T>(value: number, map: Record<number, T>, defaultValue?: T) => {
    for (const key of keys(map).reverse()) {
      if (callback(value, Number(key))) {
        return map[key]
      }
    }

    return defaultValue
  }

  return modifier
}
