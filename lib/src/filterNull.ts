/* for removing null entries */
export function filterNull<T> (obj: Record<string, T>) {
  return Object.keys(obj)
    .filter(e => obj[e] !== null)
    .reduce((o, e) => {
      o[e] = obj[e]
      return o
    }, {})
}
