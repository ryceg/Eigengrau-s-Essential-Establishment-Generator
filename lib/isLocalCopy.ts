export function isLocalCopy (): boolean {
  if (window.location.origin.includes('file://')) return true
  if (window.location.origin.includes('localhost')) return true
  if (window.location.origin === 'null') return true
  return false
}
