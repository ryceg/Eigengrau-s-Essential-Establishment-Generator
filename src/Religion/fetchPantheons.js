/**
 * @param {import("../../lib/town/_common").Town} town
 * @returns {import("../../lib/religion/religion").Pantheon}
 */
setup.getPantheon = (town) => {
  if (!town) town = State.variables.town
  if (setup.isUsingCustomPantheon()) return setup.getCustomPantheon()
  return lib.religion.pantheon[town.religion.pantheon]
}

/**
 *
 * @param {Town} town
 * @param {string} deity
 * @returns {Deity}
 */
setup.getDeity = (town, deity) => {
  return lib.findInArray(
    setup.getPantheon(town).gods, 'name', deity)
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

setup.getPantheonPercentages = (town) => {
  /**
   * @type {[string, number][]}
   */
  const deities = lib.getDeityPercentagesList(
    lib.compileWeightToPercentile(
      lib.getTownDeityWeightings(town, setup.getPantheon(town).gods)
    )
  )
  let text = ''
  for (const [deity, percentage] of deities) {
    if (percentage > 0) {
      text += ` ${deity}: ${percentage.toFixed(2)}%`
    }
  }
  return text
}

/**
 * @param {Town} town
 * @returns {boolean}
 */
setup.isUsingCustomPantheon = (town) => {
  if (!town) town = State.variables.town
  if (State.metadata.has('isUsingCustomPantheon')) {
    return State.metadata.get('isUsingCustomPantheon')
  }
  if (lib.religion.pantheon[town.religion.pantheon]) return false
  return true
}

/**
 * @returns {import("../../lib/religion/religion").Pantheon}
 */
setup.getCustomPantheon = () => {
  if (State.metadata.has('pantheon')) {
    return State.metadata.get('pantheon')
  }
}

$(document).on(':dialogopened', function () {
  if ($('#ui-dialog-body').hasClass('settings')) {
    setup.addSettingButton({
      target: 'showbiomegeneration',
      name: 'pantheon',
      description: 'Choose a pantheon to use.',
      buttonDescription: 'Open pantheon settings'
    },
    () => setup.openDialog({
      header: 'Pantheon Setup',
      passage: 'ImportPantheon',
      rerender: true
    }))
  }
})
