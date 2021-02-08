/**
 * @returns {import("../../lib/religion/religion").Pantheon}
 */
setup.getPantheon = () => {
  if (setup.doesCustomPantheonExist()) return setup.getCustomPantheon()
  return lib.religion.pantheon[settings.pantheon]
}

/**
 * @returns {string[]}
 */
setup.getPantheonNames = () => {
  console.log(Object.keys(setup.getAllPantheons()))
  return Object.keys(setup.getAllPantheons())
}

/**
 * @returns {Record<string, import("../../lib/religion/religion").Pantheon>}
 */
setup.getAllPantheons = () => {
  const test = {}
  const pantheons = Object.assign(test, lib.religion.pantheon)
  if (setup.doesCustomPantheonExist()) {
    const customPantheon = setup.getCustomPantheon()
    pantheons[customPantheon.name] = customPantheon
  }
  return pantheons
}

/**
 * @returns {boolean}
 */
setup.doesCustomPantheonExist = () => {
  return State.metadata.has('pantheon')
}

/**
 * @returns {boolean}
 */
setup.isUsingCustomPantheon = () => {
  if (State.metadata.has('isUsingCustomPantheon')) {
    return State.metadata.get('isUsingCustomPantheon')
  }
  if (lib.religion.pantheon[settings.pantheon]) return false
  return true
}

/**
 * @returns {import("../../lib/religion/religion").Pantheon}
 */
setup.getCustomPantheon = () => {
  if (State.metadata.has('pantheon')) {
    return State.metadata.get('pantheon')
  }
  return State.variables.customPantheon
}
