
setup.fetchPantheon = () => {
  if (setup.doesCustomPantheonExist()) return setup.fetchCustomPantheon()
  return lib.religion.pantheon[settings.pantheon]
}

setup.fetchPantheonNames = () => {
  console.log(Object.keys(setup.fetchAllPantheons()))
  return Object.keys(setup.fetchAllPantheons())
}

setup.fetchAllPantheons = () => {
  const test = {}
  const pantheons = Object.assign(test, lib.religion.pantheon)
  if (setup.doesCustomPantheonExist()) {
    const customPantheon = setup.fetchCustomPantheon()
    pantheons[customPantheon.name] = customPantheon
  }
  return pantheons
}

setup.doesCustomPantheonExist = () => {
  return State.metadata.has('pantheon')
}

setup.isUsingCustomPantheon = () => {
  if (State.metadata.has('isUsingCustomPantheon')) {
    return State.metadata.get('isUsingCustomPantheon')
  }
  if (lib.religion.pantheon[settings.pantheon]) return false
  return true
}

setup.fetchCustomPantheon = () => {
  if (State.metadata.has('pantheon')) {
    return State.metadata.get('pantheon')
  }
  return State.variables.customPantheon
}
