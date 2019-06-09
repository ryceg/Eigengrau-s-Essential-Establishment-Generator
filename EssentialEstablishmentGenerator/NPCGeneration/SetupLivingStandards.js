setup.livingStandards = [
  [1000, 'aristocratic'],
  [400, 'wealthy'],
  [200, 'comfortable'],
  [100, 'modest'],
  [20, 'poor'],
  [10, 'squalid'],
  [0, 'wretched']
]

setup.lifestyleTables = {
  'aristocracy': [
    [5, 'comfortable'],
    [20, 'wealthy'],
    [100, 'aristocratic']
  ],
  'nobility': [
    [5, 'modest'],
    [35, 'comfortable'],
    [95, 'wealthy'],
    [100, 'aristocratic']
  ],
  'commoner': [
    [5, 'poor'],
    [50, 'modest'],
    [95, 'comfortable'],
    [100, 'wealthy']
  ],
  'peasantry': [
    [5, 'squalid'],
    [65, 'poor'],
    [95, 'modest'],
    [100, 'comfortable']
  ],
  'paupery': [
    [5, 'wretched'],
    [80, 'squalid'],
    [95, 'poor'],
    [100, 'modest']
  ],
  'indentured servitude': [
    [95, 'wretched'],
    [100, 'squalid']
  ]
}

setup.homeBiases = {
  aristocratic: 40,
  wealthy: 20,
  comfortable: 10,
  modest: 0,
  poor: -10,
  squalid: -20,
  wretched: -40
}

setup.homeTable = [
  [0, 'on the streets'],
  [20, 'a rundown shack'],
  [30, 'no real permanent address'],
  [35, 'a village in the middle of the wilderness'],
  [40, 'an encampment'],
  [50, 'an apartment in a rundown neighborhood'],
  [70, 'a small house'],
  [90, 'a large house'],
  [110, 'a mansion'],
  [150, 'a palace']
]

setup.createLivingStandards = function (town, npc) {
  // eslint-disable-next-line no-unused-vars
  const profession = setup.findProfession(town, npc)

  npc.finances.wageVariation = (dice(10, 10) - 55)
  const wageVarianceNotes = [
    [-25, 'unbelievably unsuccessful as a ' + npc.profession],
    [-12, 'unsuccessful as a ' + npc.profession],
    [-5, 'somewhat unsuccessful as a ' + npc.profession],
    [0, ''],
    [5, 'mildly successful as a ' + npc.profession],
    [12, 'successful as a ' + npc.profession],
    [25, 'extremely successful as a ' + npc.profession]
  ]
  const note = wageVarianceNotes.find(function (desc) {
    return desc[0] <= npc.finances.wageVariation
  })
  console.log(note)
  // if (note !== '') {
  //   npc.note.push(npc.firstName + ' ' + [
  //     'has been',
  //     'has recently been',
  //     'is',
  //     'is currently'
  //   ].seededrandom() +
  //       note + '.')
  // }

  setup.addPercentage = function (target, integer) {
    return target / 100 * integer
  }

  // eslint-disable-next-line no-unused-vars
  const townVariance = ((town.roll.wealth - 50) / 5)

  /* Object.defineProperty(npc.finances.grossIncome, {
    get: setup.addPercentage(
      setup.addPercentage(profession.dailyWage, npc.finances.wageVariation),
      townVariance)
  })
  Object.defineProperty(npc.finances.livingStandard, {
    get: setup.livingStandards.find(function (desc) {
      return desc[0] <= npc.finances.grossIncome
    })
  }) */

  return npc
}

setup.createFamilyLifestyle = function (marriage) {
  const lifestyle = setup.rollFromTable(
    setup.lifestyleTables[marriage.socialClass])

  const home = setup.rollFromTable(
    setup.homeTable, 100, setup.homeBiases[marriage.lifestyle])

  return Object.assign(marriage, { lifestyle, home })
}
