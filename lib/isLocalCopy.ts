export function isLocalCopy (): boolean {
  if (!window.location.origin.includes('file://') && window.location.origin !== null) {
    return false
  }
  return true
}
