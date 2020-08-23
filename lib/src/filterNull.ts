/* for removing null entries */
export function filterNull<T> (obj: Record<string, T>) {
  Object.keys(obj)
    .filter(e => obj[e] !== null)
    .reduce((o, e) => {
      o[e] = obj[e]
      return o
    }, {})
}
