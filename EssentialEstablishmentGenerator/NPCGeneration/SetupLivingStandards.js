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
    [15, 'wealthy'],
    [80, 'aristocratic']
  ],
  'nobility': [
    [5, 'modest'],
    [30, 'comfortable'],
    [60, 'wealthy'],
    [5, 'aristocratic']
  ],
  'commoner': [
    [5, 'poor'],
    [45, 'modest'],
    [45, 'comfortable'],
    [5, 'wealthy']
  ],
  'peasantry': [
    [5, 'squalid'],
    [60, 'poor'],
    [30, 'modest'],
    [5, 'comfortable']
  ],
  'paupery': [
    [5, 'wretched'],
    [75, 'squalid'],
    [15, 'poor'],
    [5, 'modest']
  ],
  'indentured servitude': [
    [95, 'wretched'],
    [5, 'squalid']
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
  [0, 'on the streets'], // unreachable without biases
  [20, 'a rundown shack'],
  [10, 'no real permanent address'],
  [5, 'a village in the middle of the wilderness'],
  [5, 'an encampment'],
  [10, 'an apartment in a rundown neighborhood'],
  [20, 'a small house'],
  [20, 'a large house'],
  [20, 'a mansion'],
  [40, 'a palace'] // unreachable without biases
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
    setup.lifestyleTables[marriage.socialClass], 100)

  const home = setup.rollFromTable(
    setup.homeTable, 100, setup.homeBiases[marriage.lifestyle])

  return Object.assign(marriage, { lifestyle, home })
}
