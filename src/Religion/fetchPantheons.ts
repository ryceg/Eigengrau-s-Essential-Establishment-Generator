import { Pantheon } from '../../lib/religion/religion'

export const getPantheon = (): Pantheon => {
  if (isUsingCustomPantheon()) return getCustomPantheon()
  return lib.religion.pantheon[settings.pantheon]
}

export const getPantheonNames = () => {
  return Object.keys(getAllPantheons())
}

export const getAllPantheons = () => {
  const pantheons: Record<string, Pantheon> = Object.assign({}, lib.religion.pantheon)
  if (isUsingCustomPantheon()) {
    const customPantheon = getCustomPantheon()
    pantheons[customPantheon.name] = customPantheon
  }
  return pantheons
}

export const isUsingCustomPantheon = () => {
  if (State.metadata.has('isUsingCustomPantheon')) {
    if (State.metadata.get('isUsingCustomPantheon') !== true) return false
  }
  if (lib.religion.pantheon[settings.pantheon]) return false
  return true
}

export const getCustomPantheon = (): Pantheon => {
  if (State.metadata.has('pantheon')) {
    return State.metadata.get('pantheon')
  }
  return State.variables.customPantheon
}
