
setup.getPantheon = () => {
  if (setup.doesCustomPantheonExist()) return setup.getCustomPantheon()
  return lib.religion.pantheon[settings.pantheon]
}

setup.getPantheonNames = () => {
  console.log(Object.keys(setup.getAllPantheons()))
  return Object.keys(setup.getAllPantheons())
}

setup.getAllPantheons = () => {
  const test = {}
  const pantheons = Object.assign(test, lib.religion.pantheon)
  if (setup.doesCustomPantheonExist()) {
    const customPantheon = setup.getCustomPantheon()
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

setup.getCustomPantheon = () => {
  if (State.metadata.has('pantheon')) {
    return State.metadata.get('pantheon')
  }
  return State.variables.customPantheon
}
