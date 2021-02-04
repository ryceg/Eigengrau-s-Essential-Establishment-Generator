import { Pantheon } from '../../lib/religion/religion'

export const fetchPantheon = (): Pantheon => {
  if (isUsingCustomPantheon()) return fetchCustomPantheon()
  return lib.religion.pantheon[settings.pantheon]
}

export const fetchPantheonNames = () => {
  return Object.keys(fetchAllPantheons())
}

export const fetchAllPantheons = () => {
  const pantheons: Record<string, Pantheon> = Object.assign({}, lib.religion.pantheon)
  if (isUsingCustomPantheon()) {
    const customPantheon = fetchCustomPantheon()
    lib.assign(pantheons[customPantheon.name], customPantheon)
  }
  return pantheons
}

export const isUsingCustomPantheon = () => {
  if (State.metadata.has('isUsingCustomPantheon')) {
    if (State.metadata.get('isUsingCustomPantheon') !== true) return false
  }
  if (!lib.religion.pantheon[settings.pantheon]) return false
  return true
}

export const fetchCustomPantheon = (): Pantheon => {
  if (State.metadata.has('pantheon')) {
    return State.metadata.get('pantheon')
  }
  return State.variables.customPantheon
}
