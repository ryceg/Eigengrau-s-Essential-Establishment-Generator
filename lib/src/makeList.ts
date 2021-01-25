export const makeList = (array: string[], noAnd?: boolean): string => {
  if (noAnd) return commas(array, 0)
  if (array.length === 1) return array[0]
  if (array.length === 2) return `${array[0]} and ${array[1]}`
  if (array.length === 3) return `${array[0]}, ${array[1]}, and ${array[2]}`
  if (array.length > 3) {
    let temp = commas(array, 0, -1)
    temp += `and ${array[array.length - 1]}`
    return temp
  }
  return commas(array, 0)
}

const commas = (array: string[], start?: number, end?: number): string => {
  let temp = ''
  for (const item of array.slice(start, end)) {
    temp += `${item}, `
  }
  return temp
}
