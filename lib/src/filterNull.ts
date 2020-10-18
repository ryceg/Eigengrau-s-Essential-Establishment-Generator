/**
 * Removes all null entries.
 */
export function filterNull<T> (obj: Record<string, T>) {
  if (typeof obj === 'undefined') return
  const propNames = Object.getOwnPropertyNames(obj)
  for (let i = 0; i < propNames.length; i++) {
    const propName = propNames[i]
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName]
    }
  }
}
